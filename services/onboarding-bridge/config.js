// Field mapping configuration.
// Keys   = fields in the incoming webhook payload (agency contact custom fields)
// Values = custom value NAMES as they exist in the snapshot / sub-account.
// Matching is case-insensitive and ignores spaces/underscores, so
// "business_name" matches a custom value displayed as "Business Name".
//
// To support a new vertical whose snapshot uses different custom value names,
// edit this map only. No other code changes should be needed.

export const FIELD_MAP = {
  company_name:         'business_name',
  onboard_tagline:      'tagline',
  onboard_owner_name:   'owner_name',
  onboard_owner_title:  'owner_title',
  onboard_phone:        'dispatch_phone',
  onboard_address:      'business_address',
  onboard_hours:        'business_hours',
  onboard_email:        'business_email',
  onboard_logo_url:     'logo_url',
  onboard_brand_color:  'brand_primary_color',
  onboard_service_area: 'service_area',
};

// Subset of payload fields that also update the location's Business Profile
// (Settings -> Business Info). Values are GHL location object properties.
export const PROFILE_MAP = {
  onboard_address:  'address',
  onboard_email:    'email',
  onboard_phone:    'phone',
  onboard_logo_url: 'logoUrl',
};

// Tags applied to the AGENCY contact to signal outcome.
export const TAG_SUCCESS = 'onboarding-synced';
export const TAG_FAILURE = 'onboarding-sync-failed';

// Location lookup retry: 6 attempts, 30s apart (covers slow provisioning).
export const LOOKUP_RETRIES = 6;
export const LOOKUP_DELAY_MS = 30_000;

// Per-API-call write retry: 3 attempts, 2s apart.
export const WRITE_RETRIES = 3;
export const WRITE_DELAY_MS = 2_000;
