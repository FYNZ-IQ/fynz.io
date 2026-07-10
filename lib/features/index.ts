import type { FeatureData } from "./types";

// GROW
import crm from "./data/crm";
import inbox from "./data/inbox";
import marketing from "./data/marketing";
import automations from "./data/automations";
import funnels from "./data/funnels";
import reputation from "./data/reputation";
// SCHEDULE
import calendar from "./data/calendar";
import team from "./data/team";
import customers from "./data/customers";
import reminders from "./data/reminders";
// SHOP
import payments from "./data/payments";
import invoicing from "./data/invoicing";
import memberships from "./data/memberships";
// OPS
import reporting from "./data/reporting";
import accounting from "./data/accounting";
import tax from "./data/tax";
// FYNZ AI
import conversation from "./data/conversation";
import reviews from "./data/reviews";
import content from "./data/content";

export const features: FeatureData[] = [
  crm, inbox, marketing, automations, funnels, reputation,
  calendar, team, customers, reminders,
  payments, invoicing, memberships,
  reporting, accounting, tax,
  conversation, reviews, content,
];

export const featureMap: Record<string, FeatureData> = Object.fromEntries(
  features.map((f) => [f.slug, f])
);

/** Slugs served under /features/[slug] (AI agents live at /ai/<slug>). */
export const featureRouteSlugs = features
  .filter((f) => f.pillar !== "FYNZ AI")
  .map((f) => f.slug);

export type { FeatureData } from "./types";
