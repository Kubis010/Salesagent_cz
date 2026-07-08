'use client'

import { useState } from 'react'
import type { Translations } from '@/lib/i18n'

const inputStyle = {
  width: '100%',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '12px 14px',
  fontSize: '14px',
  color: 'var(--text)',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'Inter, sans-serif',
}

export default function ContactForm({ t }: { t: Translations }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    
    const formData = new FormData(e.currentTarget)
    formData.append('form-name', 'contact')

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      })
      setStatus('success')
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  const set = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [field]: e.target.value })

  if (status === 'success') {
    return (
      <div
        style={{
          background: 'rgba(34,160,107,0.08)',
          border: '1px solid rgba(34,160,107,0.3)',
          borderRadius: '12px',
          padding: '32px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
        <p style={{ fontSize: '16px', color: 'var(--text)' }}>{t.contact.form.success}</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div>
          <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            {t.contact.form.name}
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={set('name')}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            {t.contact.form.company}
          </label>
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={set('company')}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
          />
        </div>
      </div>

      <div>
        <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: 500 }}>
          {t.contact.form.email}
        </label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={set('email')}
          style={inputStyle}
          onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>

      <div>
        <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px', fontWeight: 500 }}>
          {t.contact.form.message}
        </label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={set('message')}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--border)')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        style={{
          backgroundColor: 'var(--accent)',
          color: '#0B1320',
          fontWeight: 700,
          fontSize: '15px',
          padding: '13px 28px',
          borderRadius: '8px',
          border: 'none',
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          opacity: status === 'sending' ? 0.7 : 1,
          fontFamily: 'Inter, sans-serif',
          transition: 'opacity 0.2s',
        }}
      >
        {status === 'sending' ? '...' : t.contact.form.submit}
      </button>
    </form>
  )
}
