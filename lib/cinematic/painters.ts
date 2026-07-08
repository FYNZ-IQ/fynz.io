/**
 * Scroll-scrubbed canvas painters, ported from the fynz_web cinematic site.
 * Each painter draws one product story into a region, driven by scroll
 * progress p (0..1) and a wall-clock t for idle motion.
 *
 * Unlike the source (which painted on an opaque ink stage), these draw on a
 * TRANSPARENT canvas so they can sit on the app's light or dark surfaces —
 * colors come from the palette so both themes read correctly.
 */

export interface Palette {
  text: string;
  dim: string;
  panel: string;
  hair: string;
  chipInk: string;
  grow: string;
  sched: string;
  schedText: string;
  shop: string;
  shopText: string;
  ops: string;
  dot: string;
}

export interface Fonts {
  display: string;
  body: string;
  mono: string;
}

export const darkPalette: Palette = {
  text: "#F2EFEA",
  dim: "rgba(242,239,234,0.55)",
  panel: "rgba(242,239,234,0.045)",
  hair: "rgba(242,239,234,0.10)",
  chipInk: "#0A1730",
  grow: "#D9967D",
  sched: "#7FB2E5",
  schedText: "#CFE2F6",
  shop: "#E9BE6A",
  shopText: "#F3DCA8",
  ops: "#AEB9C9",
  dot: "rgba(242,239,234,0.05)",
};

export const lightPalette: Palette = {
  text: "#0E1F3E",
  dim: "rgba(14,31,62,0.55)",
  panel: "rgba(14,31,62,0.045)",
  hair: "rgba(14,31,62,0.12)",
  chipInk: "#FFFFFF",
  grow: "#B5643F",
  sched: "#4A7FB8",
  schedText: "#2F5EBE",
  shop: "#C3923C",
  shopText: "#8A6420",
  ops: "#64748B",
  dot: "rgba(14,31,62,0.08)",
};

const TAU = Math.PI * 2;
const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);
const ez = (t: number) => 1 - Math.pow(1 - t, 3);
const ezb = (t: number) => {
  const c = 1.7;
  return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2);
};
const ph = (p: number, a: number, b: number) => clamp((p - a) / (b - a), 0, 1);

type Ctx = CanvasRenderingContext2D;

function rr(ctx: Ctx, x: number, y: number, w: number, h: number, r: number) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function chip(ctx: Ctx, F: Fonts, x: number, y: number, text: string, fg: string, bg: string, fs = 12) {
  ctx.font = `500 ${fs}px ${F.mono}`;
  const w = ctx.measureText(text).width + fs * 1.5;
  rr(ctx, x, y, w, fs * 2.1, fs * 1.05);
  ctx.fillStyle = bg;
  ctx.fill();
  ctx.fillStyle = fg;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  ctx.fillText(text, x + fs * 0.75, y + fs * 1.08);
  return w;
}

function label(ctx: Ctx, F: Fonts, P: Palette, x: number, y: number, text: string, color?: string, fs = 11, align: CanvasTextAlign = "left") {
  ctx.font = `500 ${fs}px ${F.mono}`;
  ctx.fillStyle = color || P.dim;
  ctx.textAlign = align;
  ctx.textBaseline = "middle";
  ctx.fillText(text, x, y);
}

/** Drawing region — painters fill most of the canvas. */
function region(w: number, h: number) {
  return { x: w * 0.05, y: h * 0.12, w: w * 0.9, h: h * 0.76 };
}

export type Painter = (ctx: Ctx, w: number, h: number, p: number, t: number, P: Palette, F: Fonts, reduced: boolean) => void;

/* ---------- HERO: four modules orbit + converge into the platform mark ---------- */
export const heroDraw: Painter = (ctx, w, h, p, t, P, F, reduced) => {
  const cx = w / 2, cy = h / 2;
  ctx.fillStyle = P.dot;
  const gap = Math.max(46, w / 28);
  for (let gx = gap / 2; gx < w; gx += gap)
    for (let gy = gap / 2; gy < h; gy += gap) ctx.fillRect(gx, gy, 1.5, 1.5);
  const mods = [P.grow, P.sched, P.shop, P.ops];
  const conv = ez(ph(p, 0.45, 0.95));
  const rOrbit = Math.min(w, h) * (0.34 - 0.22 * conv);
  const size = Math.min(w, h) * (0.055 + 0.02 * conv);
  const spin = (reduced ? 0 : t * 0.00012) + p * 2.2;
  mods.forEach((col, i) => {
    const a = spin + i * (TAU / 4);
    const gx = (i % 2 - 0.5) * (size * 1.35), gy = (Math.floor(i / 2) - 0.5) * (size * 1.35);
    const ox = Math.cos(a) * rOrbit, oy = Math.sin(a) * rOrbit * 0.62;
    const x = cx + ox * (1 - conv) + gx * conv;
    const y = cy + oy * (1 - conv) + gy * conv;
    ctx.save();
    ctx.shadowColor = col;
    ctx.shadowBlur = 26 + 22 * conv;
    rr(ctx, x - size / 2, y - size / 2, size, size, size * 0.28);
    ctx.fillStyle = col;
    ctx.globalAlpha = 0.92;
    ctx.fill();
    ctx.restore();
  });
  if (conv > 0.05) {
    ctx.strokeStyle = P.hair.replace(/[\d.]+\)$/, `${0.25 * conv})`);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, size * 1.55, 0, TAU);
    ctx.stroke();
  }
};

/* ---------- GROW: messages -> inbox -> pipeline ---------- */
export const growDraw: Painter = (ctx, w, h, p, t, P, F) => {
  const R = region(w, h);
  const pad = 14;
  const ibx = R.x, ibw = R.w * 0.40, ibh = R.h * 0.92, iby = R.y + R.h * 0.04;
  rr(ctx, ibx, iby, ibw, ibh, 16);
  ctx.fillStyle = P.panel; ctx.fill();
  ctx.strokeStyle = P.hair; ctx.lineWidth = 1; ctx.stroke();
  label(ctx, F, P, ibx + pad, iby + 22, "INBOX — ALL CHANNELS", P.dim, 10);
  const channels = ["WhatsApp", "Facebook", "Missed call", "TikTok", "Web form"];
  const msgs: [string, string][] = [
    ["Abel", "Do you have Saturday slots?"],
    ["Sara", "Price for full detail?"],
    ["+251•••", "Missed call · auto-replied ✓"],
    ["Lina", "Saw your video — booking?"],
    ["Noah", "Quote request sent"],
  ];
  const rowH = (ibh - 44) / 5;
  msgs.forEach((m, i) => {
    const k = ez(ph(p, 0.02 + i * 0.07, 0.14 + i * 0.07));
    if (k <= 0) return;
    const y = iby + 36 + i * rowH;
    ctx.save();
    ctx.globalAlpha = k;
    const sx = ibx + pad - (1 - k) * 40;
    ctx.beginPath();
    ctx.arc(sx + 11, y + rowH * 0.42, 11, 0, TAU);
    ctx.fillStyle = i === 2 ? "rgba(233,190,106,0.25)" : "rgba(217,150,125,0.22)";
    ctx.fill();
    ctx.font = `600 11px ${F.body}`;
    ctx.fillStyle = P.text; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText(m[0], sx + 30, y + rowH * 0.30);
    ctx.font = `400 10.5px ${F.body}`;
    ctx.fillStyle = P.dim;
    ctx.fillText(m[1].slice(0, Math.floor(m[1].length * Math.min(1, k * 1.4))), sx + 30, y + rowH * 0.62);
    label(ctx, F, P, ibx + ibw - pad, y + rowH * 0.30, channels[i], P.grow, 8.5, "right");
    ctx.restore();
  });
  const cols = ["NEW", "FOLLOW-UP", "WON"], ncol = 3;
  const pgap = 12, px = R.x + R.w * 0.46, pw = (R.w * 0.54 - pgap * (ncol - 1)) / ncol;
  const counts = [3, 2, 2];
  const colOf = [P.dim, P.sched, P.grow];
  for (let i = 0; i < ncol; i++) {
    const x = px + i * (pw + pgap);
    rr(ctx, x, iby, pw, ibh, 14);
    ctx.fillStyle = P.panel; ctx.fill();
    ctx.strokeStyle = P.hair; ctx.stroke();
    label(ctx, F, P, x + 10, iby + 20, cols[i], i === 2 ? P.grow : P.dim, 9.5);
    for (let c = 0; c < counts[i]; c++) {
      const start = 0.30 + i * 0.18 + c * 0.07;
      const k = ph(p, start, start + 0.10);
      if (k <= 0) continue;
      const kk = ezb(k);
      const cy0 = iby + 34 + c * 46, cardH = 36;
      ctx.save();
      ctx.globalAlpha = Math.min(1, k * 1.6);
      rr(ctx, x + 8, cy0 + (1 - kk) * -26, pw - 16, cardH, 9);
      ctx.fillStyle = P.panel; ctx.fill();
      ctx.fillStyle = colOf[i];
      rr(ctx, x + 8, cy0 + (1 - kk) * -26, 4, cardH, 2);
      ctx.fill();
      ctx.restore();
    }
  }
  const winK = ph(p, 0.84, 1);
  if (winK > 0) {
    const x = px + 2 * (pw + pgap);
    ctx.save();
    ctx.shadowColor = P.grow; ctx.shadowBlur = 34 * winK;
    rr(ctx, x, iby, pw, ibh, 14);
    ctx.strokeStyle = P.grow; ctx.globalAlpha = 0.85 * winK; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.restore();
    ctx.globalAlpha = winK;
    chip(ctx, F, x, iby - 30, "DEAL WON ✓", P.chipInk, P.grow, 10);
    ctx.globalAlpha = 1;
  }
  const leads = Math.round(ez(clamp(p * 1.15, 0, 1)) * 27);
  label(ctx, F, P, R.x, R.y - 14, "LEADS CAPTURED THIS WEEK", P.dim, 9.5);
  ctx.font = `800 26px ${F.display}`;
  ctx.fillStyle = P.grow; ctx.textAlign = "left"; ctx.textBaseline = "middle";
  ctx.fillText(String(leads), R.x + 218, R.y - 14);
};

/* ---------- SCHEDULE: calendar fills + reminder ripples + no-show rebooked ---------- */
export const schedDraw: Painter = (ctx, w, h, p, t, P, F) => {
  const R = region(w, h);
  const days = ["MON", "TUE", "WED", "THU", "FRI"], rows = 6;
  const gx = R.x, gy = R.y + 26, gw = R.w, gh = R.h - 46;
  label(ctx, F, P, gx, R.y + 4, "THIS WEEK — BOOKINGS", P.dim, 10);
  const cw = gw / days.length;
  days.forEach((d, i) => label(ctx, F, P, gx + i * cw + cw / 2, gy + 10, d, P.dim, 9.5, "center"));
  ctx.strokeStyle = P.hair; ctx.lineWidth = 1;
  rr(ctx, gx, gy + 22, gw, gh - 22, 14);
  ctx.fillStyle = P.panel; ctx.fill(); ctx.stroke();
  const order = [[0, 1], [2, 0], [1, 2], [4, 1], [3, 3], [0, 3], [2, 2], [1, 4], [4, 4], [3, 0], [2, 4], [0, 0], [4, 2], [1, 0], [3, 2], [2, 1]];
  const names = ["Abel", "Sara", "Lina", "Noah", "Maya", "Omar", "Ivy", "Leo"];
  order.forEach((s, i) => {
    const k = ph(p, 0.06 + i * 0.034, 0.12 + i * 0.034);
    if (k <= 0) return;
    const kk = ezb(k);
    const x = gx + s[0] * cw + 6, y = gy + 26 + s[1] * ((gh - 30) / rows) + 4;
    const bw = cw - 12, bh = (gh - 30) / rows - 8;
    ctx.save();
    ctx.globalAlpha = Math.min(1, k * 1.5);
    ctx.translate(x + bw / 2, y + bh / 2);
    ctx.scale(0.6 + 0.4 * kk, 0.6 + 0.4 * kk);
    ctx.translate(-(x + bw / 2), -(y + bh / 2));
    rr(ctx, x, y, bw, bh, 8);
    ctx.fillStyle = "rgba(127,178,229,0.18)"; ctx.fill();
    ctx.strokeStyle = "rgba(127,178,229,0.55)"; ctx.stroke();
    ctx.font = `600 10px ${F.body}`;
    ctx.fillStyle = P.schedText; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText(names[i % names.length], x + 8, y + bh / 2);
    ctx.restore();
  });
  const rk = ph(p, 0.40, 0.62);
  if (rk > 0 && rk < 1) {
    const cx = gx + gw * 0.5, cy = gy + 22 + (gh - 22) * 0.45;
    for (let i = 0; i < 3; i++) {
      const q = clamp(rk * 1.4 - i * 0.18, 0, 1);
      if (q <= 0) continue;
      ctx.beginPath();
      ctx.arc(cx, cy, q * Math.min(gw, gh) * 0.42, 0, TAU);
      ctx.strokeStyle = `rgba(127,178,229,${0.5 * (1 - q)})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
  }
  if (rk > 0.15 && rk < 1) {
    ctx.globalAlpha = Math.min(1, (rk - 0.15) * 4) * (1 - ph(p, 0.58, 0.64));
    chip(ctx, F, gx + gw * 0.5 - 86, gy + 22 + (gh - 22) * 0.45 - 13, "REMINDERS SENT · 12", P.schedText, "rgba(13,42,66,0.92)", 10);
    ctx.globalAlpha = 1;
  }
  const nk = ph(p, 0.70, 0.84);
  if (nk > 0) {
    const x = gx + 2 * cw + 6, y = gy + 26 + 3 * ((gh - 30) / rows) + 4, bw = cw - 12, bh = (gh - 30) / rows - 8;
    ctx.globalAlpha = ez(nk);
    rr(ctx, x, y, bw, bh, 8);
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = "rgba(233,190,106,0.8)"; ctx.stroke();
    ctx.setLineDash([]);
    chip(ctx, F, x - 6, y - 30, "NO-SHOW → REBOOKED ✓", P.chipInk, P.shop, 9.5);
    ctx.globalAlpha = 1;
  }
  const uk = ez(clamp(p * 1.1, 0, 1));
  label(ctx, F, P, gx, gy + gh + 16, "UTILIZATION", P.dim, 9.5);
  rr(ctx, gx + 96, gy + gh + 10, gw - 200, 10, 5);
  ctx.fillStyle = P.panel; ctx.fill();
  rr(ctx, gx + 96, gy + gh + 10, (gw - 200) * 0.86 * uk, 10, 5);
  ctx.fillStyle = P.sched; ctx.fill();
  label(ctx, F, P, gx + gw, gy + gh + 16, Math.round(86 * uk) + "%", P.schedText, 11, "right");
};

/* ---------- SHOP: store builds -> add to cart -> paid -> delivery ---------- */
export const shopDraw: Painter = (ctx, w, h, p, t, P, F) => {
  const R = region(w, h);
  label(ctx, F, P, R.x, R.y + 4, "YOUR STORE — LIVE", P.dim, 10);
  const cards = 3, gap = 14;
  const cw = (R.w - gap * (cards - 1)) / cards, chh = R.h * 0.46, cy = R.y + 26;
  const prices = ["24.00", "58.00", "12.50"];
  const cartX = R.x + R.w - 26, cartY = cy - 8;
  for (let i = 0; i < cards; i++) {
    const k = ez(ph(p, 0.04 + i * 0.07, 0.16 + i * 0.07));
    if (k <= 0) continue;
    const x = R.x + i * (cw + gap), y = cy + (1 - k) * 24;
    ctx.save();
    ctx.globalAlpha = k;
    rr(ctx, x, y, cw, chh, 14);
    ctx.fillStyle = P.panel; ctx.fill();
    ctx.strokeStyle = P.hair; ctx.stroke();
    rr(ctx, x + 10, y + 10, cw - 20, chh * 0.52, 10);
    ctx.fillStyle = `rgba(233,190,106,${0.10 + 0.07 * i})`; ctx.fill();
    ctx.font = `600 11px ${F.body}`;
    ctx.fillStyle = P.text; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText("Product " + (i + 1), x + 12, y + chh * 0.66);
    ctx.font = `500 11px ${F.mono}`;
    ctx.fillStyle = P.shop;
    ctx.fillText(prices[i], x + 12, y + chh * 0.82);
    ctx.restore();
  }
  const fk = ph(p, 0.32, 0.46);
  if (fk > 0 && fk < 1) {
    const k = ez(fk);
    const sx = R.x + (cw + gap) + cw / 2, sy = cy + chh * 0.36;
    const x = sx + (cartX - sx) * k, y = sy + (cartY - sy) * k - Math.sin(k * Math.PI) * 46;
    rr(ctx, x - 12, y - 12, 24, 24, 7);
    ctx.fillStyle = P.shop; ctx.globalAlpha = 1 - k * 0.25; ctx.fill();
    ctx.globalAlpha = 1;
  }
  ctx.font = `500 15px ${F.body}`;
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillStyle = fk >= 1 ? P.shop : P.dim;
  ctx.fillText("🛒", cartX, cartY);
  if (fk >= 1) chip(ctx, F, cartX - 18, cartY - 34, "1", P.chipInk, P.shop, 9);
  const ck = ph(p, 0.50, 0.62);
  const px = R.x, py = cy + chh + 26, pw2 = R.w, ph2 = R.h * 0.34;
  if (ck > 0) {
    ctx.globalAlpha = ez(ck);
    rr(ctx, px, py, pw2, ph2, 14);
    ctx.fillStyle = P.panel; ctx.fill();
    ctx.strokeStyle = P.hair; ctx.stroke();
    label(ctx, F, P, px + 14, py + 22, "CHECKOUT", P.dim, 10);
    ctx.font = `500 13px ${F.mono}`;
    ctx.fillStyle = P.text; ctx.textAlign = "left";
    ctx.fillText("Total  58.00", px + 14, py + 48);
    label(ctx, F, P, px + 14, py + 70, "MOBILE MONEY · CARD · BANK", P.dim, 9);
    ctx.globalAlpha = 1;
  }
  const pk = ph(p, 0.62, 0.78);
  if (pk > 0) {
    const cx2 = px + pw2 - 54, cy2 = py + ph2 / 2, r = 20;
    ctx.strokeStyle = P.grow; ctx.lineWidth = 2.5; ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(cx2, cy2, r, -Math.PI / 2, -Math.PI / 2 + TAU * ez(Math.min(1, pk * 1.4)));
    ctx.stroke();
    const tk = ph(pk, 0.5, 1);
    if (tk > 0) {
      ctx.beginPath();
      ctx.moveTo(cx2 - 8, cy2 + 1);
      ctx.lineTo(cx2 - 8 + 8 * Math.min(1, tk * 2), cy2 + 1 + 7 * Math.min(1, tk * 2));
      if (tk > 0.5) ctx.lineTo(cx2 - 8 + 8 + 12 * (tk - 0.5) * 2, cy2 + 8 - 15 * (tk - 0.5) * 2);
      ctx.stroke();
    }
    if (pk > 0.85) chip(ctx, F, cx2 - 92, cy2 + 30, "PAID ✓ INSTANT", P.chipInk, P.grow, 9.5);
  }
  const dk = ph(p, 0.80, 0.98);
  if (dk > 0) {
    const y = py + ph2 + 26, x0 = px, x1 = px + pw2;
    ctx.globalAlpha = Math.min(1, dk * 2);
    label(ctx, F, P, x0, y - 14, "DELIVERY STATUS — SENT TO CUSTOMER", P.dim, 9);
    ctx.strokeStyle = P.hair; ctx.lineWidth = 3; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.strokeStyle = P.shop;
    ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x0 + (x1 - x0) * ez(dk), y); ctx.stroke();
    ["ORDERED", "PACKED", "OUT", "DELIVERED"].forEach((s, i) => {
      const sx = x0 + (x1 - x0) * (i / 3);
      const on = ez(dk) >= i / 3 - 0.01;
      ctx.beginPath();
      ctx.arc(sx, y, 5, 0, TAU);
      ctx.fillStyle = on ? P.shop : P.panel; ctx.fill();
      ctx.strokeStyle = on ? P.shop : P.hair; ctx.lineWidth = 1.5; ctx.stroke();
      label(ctx, F, P, sx, y + 18, s, on ? P.shopText : P.dim, 8, "center");
    });
    ctx.globalAlpha = 1;
  }
};

/* ---------- OPS: ledger assembles, bars grow, inventory stacks ---------- */
export const opsDraw: Painter = (ctx, w, h, p, t, P, F) => {
  const R = region(w, h);
  label(ctx, F, P, R.x, R.y + 4, "OPS — PREVIEW", P.dim, 10);
  const lx = R.x, lw = R.w * 0.55, ly = R.y + 26, lh = R.h * 0.56;
  rr(ctx, lx, ly, lw, lh, 14);
  ctx.fillStyle = P.panel; ctx.fill();
  ctx.strokeStyle = P.hair; ctx.stroke();
  label(ctx, F, P, lx + 12, ly + 20, "LEDGER — AUTO-RECORDED", P.dim, 9);
  const rows: [string, string, string][] = [
    ["Booking · Sara", "+ 35.00", P.sched],
    ["Store order #214", "+ 58.00", P.shop],
    ["Lead → invoice", "+ 120.00", P.grow],
    ["Supplies", "– 22.40", P.ops],
    ["Booking · Noah", "+ 35.00", P.sched],
  ];
  rows.forEach((r, i) => {
    const k = ez(ph(p, 0.06 + i * 0.08, 0.18 + i * 0.08));
    if (k <= 0) return;
    const y = ly + 36 + i * ((lh - 44) / rows.length);
    ctx.save();
    ctx.globalAlpha = k;
    const sx = lx + 12 - (1 - k) * 30;
    ctx.fillStyle = r[2];
    rr(ctx, sx, y - 4, 3, 18, 1.5); ctx.fill();
    ctx.font = `400 11px ${F.body}`;
    ctx.fillStyle = P.text; ctx.textAlign = "left"; ctx.textBaseline = "middle";
    ctx.fillText(r[0], sx + 12, y + 5);
    ctx.font = `500 11px ${F.mono}`;
    ctx.fillStyle = r[1][0] === "+" ? P.grow : P.dim;
    ctx.textAlign = "right";
    ctx.fillText(r[1], lx + lw - 12, y + 5);
    ctx.restore();
  });
  const bx = R.x + R.w * 0.60, bw = R.w * 0.40, by = ly, bh = lh;
  rr(ctx, bx, by, bw, bh, 14);
  ctx.fillStyle = P.panel; ctx.fill();
  ctx.strokeStyle = P.hair; ctx.stroke();
  label(ctx, F, P, bx + 12, by + 20, "MONTHLY P&L", P.dim, 9);
  const vals = [0.45, 0.62, 0.5, 0.78, 0.9, 1.0];
  const bgap = 10, bbw = (bw - 24 - bgap * (vals.length - 1)) / vals.length;
  vals.forEach((v, i) => {
    const k = ez(ph(p, 0.30 + i * 0.05, 0.46 + i * 0.05));
    const bh2 = (bh - 56) * v * k;
    const x = bx + 12 + i * (bbw + bgap), y = by + bh - 14 - bh2;
    rr(ctx, x, y, bbw, bh2, 4);
    ctx.fillStyle = i === vals.length - 1 ? P.grow : "rgba(174,185,201,0.35)";
    ctx.fill();
  });
  const ix = R.x, iy = ly + lh + 22, ih = R.h - (lh + 48);
  label(ctx, F, P, ix, iy, "INVENTORY — UPDATES ITSELF", P.dim, 9);
  const boxes = 8;
  for (let i = 0; i < boxes; i++) {
    const k = ezb(ph(p, 0.55 + i * 0.04, 0.64 + i * 0.04));
    if (k <= 0) continue;
    const x = ix + i * (R.w / boxes), s = Math.min(R.w / boxes - 10, ih - 22);
    ctx.save();
    ctx.globalAlpha = Math.min(1, k);
    rr(ctx, x, iy + 12 + (1 - k) * -16, s, s * 0.7, 6);
    ctx.fillStyle = "rgba(174,185,201,0.12)"; ctx.fill();
    ctx.strokeStyle = "rgba(174,185,201,0.35)"; ctx.stroke();
    ctx.restore();
  }
  const sk = ph(p, 0.82, 0.96);
  if (sk > 0) {
    ctx.save();
    ctx.globalAlpha = ez(sk);
    const cx2 = R.x + R.w / 2, cy2 = R.y + R.h * 0.42;
    ctx.translate(cx2, cy2);
    ctx.rotate(-0.06);
    const fs = Math.min(44, w / 10);
    ctx.font = `800 ${fs}px ${F.display}`;
    ctx.textAlign = "center"; ctx.textBaseline = "middle";
    ctx.strokeStyle = "rgba(233,190,106,0.85)"; ctx.lineWidth = 1.5;
    ctx.strokeText("COMING SOON", 0, 0);
    rr(ctx, -fs * 4.3, -fs, fs * 8.6, fs * 2, 16);
    ctx.stroke();
    ctx.restore();
  }
};

export const PAINTERS: Record<string, Painter> = {
  hero: heroDraw,
  grow: growDraw,
  schedule: schedDraw,
  sched: schedDraw,
  shop: shopDraw,
  ops: opsDraw,
};
