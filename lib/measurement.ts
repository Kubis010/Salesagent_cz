declare global {
  interface Window {
    SalesMeasurement?: {
      get: () => Record<string, unknown> | null;
      track: (name: string, params: Record<string, string>) => boolean;
      refresh: () => void;
    };
  }
}
export function leadAttribution() {
  try { return window.SalesMeasurement?.get() ?? null; } catch { return null; }
}
export function trackLead(lang: string) {
  try {
    window.SalesMeasurement?.refresh();
    window.SalesMeasurement?.track('generate_lead', { form_id: 'contact', lang });
  } catch {
    // A tracking failure must never turn an accepted form submission into an error.
  }
}
