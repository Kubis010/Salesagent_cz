'use client'

import { useEffect, useState } from 'react'
import type { Translations } from '@/lib/i18n'

interface HeroPipelineProps {
  t: Translations
}

const STEP_DURATION = 1650 // ms each row stays active
const END_PAUSE = 2200 // extra dwell on the final "reply" row

function channelColor(channel: string): string {
  switch (channel) {
    case 'search':
      return 'var(--green)'
    case 'email':
      return 'var(--accent)'
    case 'linkedin':
      return '#3B82F6'
    case 'reply':
      return 'var(--accent)'
    default:
      return 'var(--text-muted)'
  }
}

function channelIcon(channel: string) {
  switch (channel) {
    case 'search':
      return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'email':
      return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <rect x="1.5" y="3" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
          <path d="M3.4 5.2H1.3V14h2.1V5.2zM2.35 1.6a1.22 1.22 0 100 2.44 1.22 1.22 0 000-2.44zM14.7 14v-4.83c0-2.58-1.38-3.78-3.22-3.78-1.48 0-2.15.81-2.52 1.38V5.2H6.85V14h2.1V9.1c0-.26.02-.52.1-.7.2-.52.68-1.06 1.48-1.06 1.04 0 1.46.79 1.46 1.96V14h2.1z" />
        </svg>
      )
    case 'reply':
      return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d="M2 8l4 4 8-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return null
  }
}

export default function HeroPipeline({ t }: HeroPipelineProps) {
  const steps = t.pipelineDemo.steps
  const [active, setActive] = useState(0)
  const [reached, setReached] = useState(147)
  const [replies, setReplies] = useState(11)

  // Advance the active row; loop and bump the live counters each cycle.
  useEffect(() => {
    const last = steps.length - 1
    const delay = active === last ? END_PAUSE : STEP_DURATION
    const id = setTimeout(() => {
      setActive((a) => {
        if (a >= last) {
          setReached((r) => r + Math.floor(Math.random() * 3) + 1)
          if (Math.random() > 0.5) setReplies((r) => r + 1)
          return 0
        }
        return a + 1
      })
    }, delay)
    return () => clearTimeout(id)
  }, [active, steps.length])

  return (
    <div
      style={{
        background: 'linear-gradient(180deg, var(--bg-card) 0%, #0f1626 100%)',
        border: '1px solid var(--border-strong)',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 30px 80px -40px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.02)',
      }}
    >
      {/* Window chrome / status bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          borderBottom: '1px solid var(--border)',
          background: 'rgba(255,255,255,0.015)',
        }}
      >
        <div style={{ display: 'flex', gap: '7px' }}>
          {['#ff6b5a', '#ffbd44', '#22a06b'].map((c) => (
            <span
              key={c}
              style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: c, opacity: 0.85 }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            className="animate-pulse-dot"
            style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: 'var(--green)', display: 'inline-block' }}
          />
          <span style={{ fontSize: '11px', color: 'var(--green)', fontWeight: 600, letterSpacing: '0.05em' }}>
            {t.hero.pipelineLabel}
          </span>
        </div>
      </div>

      {/* Live counters */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid var(--border)' }}>
        <div style={{ padding: '14px 20px', borderRight: '1px solid var(--border)' }}>
          <div className="font-mono-data" style={{ fontSize: '24px', fontWeight: 500, color: 'var(--text)', lineHeight: 1 }}>
            {reached}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '5px' }}>{t.hero.statsToday}</div>
        </div>
        <div style={{ padding: '14px 20px' }}>
          <div className="font-mono-data" style={{ fontSize: '24px', fontWeight: 500, color: 'var(--accent)', lineHeight: 1 }}>
            {replies}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '5px' }}>{t.hero.statsReplies}</div>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ padding: '14px 20px 18px' }}>
        {steps.map((step, i) => (
          <TimelineRow
            key={i}
            step={step}
            isLast={i === steps.length - 1}
            state={i < active ? 'done' : i === active ? 'active' : 'upcoming'}
            emailFragment={t.pipelineDemo.emailFragment}
            channelLabel={t.pipelineDemo.channelLabels[step.channel as keyof typeof t.pipelineDemo.channelLabels]}
          />
        ))}
      </div>
    </div>
  )
}

type Step = Translations['pipelineDemo']['steps'][number]

function TimelineRow({
  step,
  isLast,
  state,
  emailFragment,
  channelLabel,
}: {
  step: Step
  isLast: boolean
  state: 'done' | 'active' | 'upcoming'
  emailFragment: string
  channelLabel: string
}) {
  const color = channelColor(step.channel)
  const isDone = state === 'done'
  const isActive = state === 'active'

  return (
    <div style={{ display: 'flex', gap: '14px', minHeight: '40px' }}>
      {/* Rail: node + connector */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: `1.5px solid ${isDone ? 'var(--green)' : isActive ? color : 'var(--border-strong)'}`,
            backgroundColor: isDone ? 'var(--green)' : isActive ? `${color}1f` : 'transparent',
            color: isDone ? '#0B1320' : isActive ? color : 'var(--text-muted)',
            boxShadow: isActive ? `0 0 0 4px ${color}1a` : 'none',
            transition: 'border-color 0.4s, background-color 0.4s, box-shadow 0.4s',
          }}
          className={isActive ? 'animate-pulse-dot' : undefined}
        >
          {isDone ? (
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3.5 3.5L13 5" stroke="#0B1320" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            channelIcon(step.channel)
          )}
        </div>

        {/* Connector */}
        {!isLast && (
          <div style={{ width: '2px', flex: 1, backgroundColor: 'var(--border)', marginTop: '2px', marginBottom: '2px', borderRadius: '2px', overflow: 'hidden' }}>
            <div
              style={{
                width: '100%',
                height: isDone || isActive ? '100%' : '0%',
                backgroundColor: isDone ? 'var(--green)' : color,
                transition: 'height 1.2s linear',
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: '14px', flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <span
            style={{
              fontSize: '13px',
              fontWeight: isActive ? 600 : 500,
              color: isActive ? 'var(--text)' : isDone ? 'var(--text-muted)' : 'var(--text-muted)',
              opacity: state === 'upcoming' ? 0.5 : 1,
              transition: 'color 0.4s, opacity 0.4s',
              lineHeight: 1.3,
            }}
          >
            {step.label}
          </span>

          {/* Channel chip */}
          <span
            style={{
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color: isActive || isDone ? color : 'var(--text-muted)',
              opacity: isActive || isDone ? 0.95 : 0.4,
              border: `1px solid ${isActive || isDone ? `${color}55` : 'var(--border)'}`,
              borderRadius: '5px',
              padding: '2px 6px',
              flexShrink: 0,
              transition: 'color 0.4s, opacity 0.4s, border-color 0.4s',
            }}
          >
            {channelLabel}
          </span>
        </div>

        {/* Detail line (only for active row, keeps it clean) */}
        {isActive && (
          <div className="animate-fade-in-up" style={{ marginTop: '4px' }}>
            {step.typing ? (
              <TypingText text={emailFragment} color="var(--accent)" />
            ) : (
              <span
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontFamily: step.channel === 'reply' ? 'inherit' : 'inherit',
                }}
              >
                {step.detail}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function TypingText({ text, color }: { text: string; color: string }) {
  const [shown, setShown] = useState('')

  useEffect(() => {
    setShown('')
    let i = 0
    const id = setInterval(() => {
      i++
      setShown(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, 38)
    return () => clearInterval(id)
  }, [text])

  return (
    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color, lineHeight: 1.4 }}>
      {shown}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '11px',
          backgroundColor: color,
          marginLeft: '1px',
          verticalAlign: 'text-bottom',
          animation: 'pulse-dot 0.8s ease-in-out infinite',
        }}
      />
    </span>
  )
}
