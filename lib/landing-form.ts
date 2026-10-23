// HTTP success is the Netlify Forms acknowledgement, not proof of notification delivery.
export async function postLandingForm(data: FormData, hostname: string, send: typeof fetch = fetch) {
  if (!/^(www\.)?salesagent\.cz$/.test(hostname)) throw new Error('Preview: submissions disabled')
  const response = await send('/__landing-forms.html', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(Array.from(data.entries()).map(([key, value]) => [key, String(value)])).toString(),
  })
  if (!response.ok) throw new Error('Submission failed')
}
