import express from 'express';
import { runSync } from './sync.js';

const REQUIRED_ENV = ['GHL_AGENCY_TOKEN', 'GHL_COMPANY_ID', 'WEBHOOK_SECRET'];
const missingEnv = REQUIRED_ENV.filter((k) => !process.env[k]);
if (missingEnv.length > 0) {
  console.error(`Missing required environment variables: ${missingEnv.join(', ')}`);
  process.exit(1);
}
if (!process.env.ALERT_WEBHOOK_URL) {
  console.warn('ALERT_WEBHOOK_URL not set — failure alerts will only appear in logs.');
}

const app = express();
app.use(express.json({ limit: '256kb' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/onboard', (req, res) => {
  const payload = req.body || {};

  // Accept the shared secret in the body or in a header, whichever the
  // GHL Custom Webhook action was configured to send.
  const secret = payload.secret || req.get('x-webhook-secret');
  if (secret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  if (!payload.email || !String(payload.email).includes('@')) {
    return res.status(400).json({ error: 'missing or invalid email' });
  }

  // ACK immediately — GHL webhook actions time out fast. Sync runs async.
  res.status(200).json({ accepted: true });

  setImmediate(() => {
    runSync(payload).catch((err) =>
      console.error(
        JSON.stringify({
          ts: new Date().toISOString(),
          level: 'error',
          msg: 'Unhandled sync error',
          error: err.message,
        }),
      ),
    );
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`fynz-onboarding-bridge listening on :${port}`);
});
