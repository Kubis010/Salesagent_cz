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
  return window.SalesMeasurement?.get() ?? null;
}
export function trackLead(lang: string) {
  window.SalesMeasurement?.track('generate_lead', { form_id: 'contact', lang });
}
