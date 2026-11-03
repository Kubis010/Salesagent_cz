'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function WorkshopForm() {
  const [prepared, setPrepared] = useState(false)

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const details = [
      ['Jméno', 'name'], ['Firma', 'company'], ['E-mail', 'email'],
      ['Telefon', 'phone'], ['Počet účastníků', 'participants'],
      ['Forma', 'format'], ['Preferovaný termín', 'date'], ['Co se má tým naučit', 'message'],
    ].map(([label, key]) => `${label}: ${String(data.get(key) || 'neuvedeno')}`).join('\n')
    const subject = 'Poptávka: workshop AI obchodník za 2 hodiny'
    const body = `Dobrý den, mám zájem o workshop pro náš tým.\n\n${details}`
    window.location.href = `mailto:info@salesagent.cz?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  return <form className={styles.form} onSubmit={submit}>
    <div className={styles.formGrid}>
      <label>Jméno<input name="name" autoComplete="name" maxLength={150} required /></label>
      <label>Firma<input name="company" autoComplete="organization" maxLength={200} required /></label>
      <label>E-mail<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      <label>Telefon<input name="phone" type="tel" autoComplete="tel" maxLength={40} required /></label>
      <label>Počet účastníků<input name="participants" type="number" min="1" max="8" defaultValue="2" required /></label>
      <label>Forma workshopu<select name="format" defaultValue="online"><option value="Online">Online</option><option value="Osobně">Osobně</option></select></label>
    </div>
    <label>Preferovaný termín <span className={styles.optional}>(nepovinné)</span><input name="date" placeholder="Např. druhá polovina listopadu" maxLength={150} /></label>
    <label>Co by se měl tým naučit hlavně? <span className={styles.optional}>(nepovinné)</span><textarea name="message" rows={4} maxLength={2000} placeholder="Napište nám, co dnes v obchodě řešíte." /></label>
    <button type="submit" className={styles.primary}>Připravit e-mail s poptávkou <span aria-hidden="true">↗</span></button>
    <p className={styles.formNote}>Otevře se váš poštovní program s vyplněnou zprávou na info@salesagent.cz. Poptávku odešlete až po její kontrole.</p>
    {prepared && <p role="status" className={styles.formStatus}>E-mail je připravený k odeslání ve vašem poštovním programu. Pokud se neotevřel, napište nám přímo na <a href="mailto:info@salesagent.cz">info@salesagent.cz</a>.</p>}
  </form>
}
