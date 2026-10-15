import Script from 'next/script'

// Basic consent mode: no GA request or first-touch cookie until analytics consent.
export default function MeasurementScripts() {
  return <>
    <Script src="/measurement.js" strategy="beforeInteractive" />
    <Script src="https://cdn.cookie-script.com/s/6195a622ebb5274d4b804e418a7e0e6e.js" strategy="afterInteractive" />
  </>
}
