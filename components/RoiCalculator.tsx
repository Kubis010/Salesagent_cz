'use client'

import { useState } from 'react'

const BOOKING_URL =
  'https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz'

const SERVICE_COST_CZK = 5900
const TOTAL_COMPANIES = 1000
const REPLY_RATE = 0.02
const MEETINGS = TOTAL_COMPANIES * REPLY_RATE // = 20

const EMPLOYEE_COST_CZK = 100000
const EMPLOYEE_COMPANIES = 800
const EMPLOYEE_MEETINGS = EMPLOYEE_COMPANIES * REPLY_RATE // = 16

function fmtCzk(n: number) {
  if (n < 0) return '− ' + Math.abs(Math.round(n)).toLocaleString('cs-CZ') + ' Kč'
  return Math.round(n).toLocaleString('cs-CZ') + ' Kč'
}
function fmtEur(n: number) {
  const v = Math.round(n / 25)
  if (v < 0) return '− €' + Math.abs(v).toLocaleString('en')
  return '€' + v.toLocaleString('en')
}

export default function RoiCalculator({ locale }: { locale: string }) {
  const cs = locale === 'cs'
  const fmt = cs ? fmtCzk : fmtEur

  const [dealValue, setDealValue] = useState(50000)
  const [closeRate, setCloseRate] = useState(15)

  const serviceCost = cs ? SERVICE_COST_CZK : Math.round(SERVICE_COST_CZK / 25) * 25
  const empCost = cs ? EMPLOYEE_COST_CZK : Math.round(EMPLOYEE_COST_CZK / 25) * 25

  const aiCustomers = (MEETINGS * closeRate) / 100
  const aiRevenue = aiCustomers * dealValue
  const aiProfit = aiRevenue - SERVICE_COST_CZK

  const empCustomers = (EMPLOYEE_MEETINGS * closeRate) / 100
  const empRevenue = empCustomers * dealValue
  const empProfit = empRevenue - EMPLOYEE_COST_CZK

  const advantage = aiProfit - empProfit
  const roiX = aiRevenue > 0 ? (aiRevenue / SERVICE_COST_CZK).toFixed(1) : '0'

  const t = cs
    ? {
        eyebrow: 'Kalkulačka návratnosti',
        title: 'Kolik vám to přinese?',
        sub: 'Nastavte hodnotu zákazníka a vaši úspěšnost ze schůzky — zbytek jsou reálná čísla systému.',
        dealLabel: 'Průměrná hodnota zákazníka',
        dealMin: '10 000 Kč',
        dealMax: '500 000 Kč',
        closeLabel: 'Úspěšnost ze schůzky',
        aiTitle: 'SalesAgent.cz',
        aiCost: '5 900 Kč / měsíc',
        empTitle: 'Obchodní zástupce',
        empCost: '~100 000 Kč / měsíc',
        reached: 'Oslovených firem',
        replyRate: 'Odezva',
        closeRateLbl: 'Úspěšnost',
        meetings: 'Schůzky',
        newCustomers: 'Noví zákazníci / měsíc',
        newRevenue: 'Nové tržby / měsíc',
        cost: 'Náklad / měsíc',
        net: 'Čistý přínos / měsíc',
        roi: 'návratnost investice',
        advNote: (a: string, cr: number, dv: string) =>
          `měsíční výhoda AI systému oproti obchodnímu zástupci — při ${cr} % úspěšnosti a hodnotě zákazníka ${dv}.`,
        cta: 'Domluvit nezávazný hovor',
        ctaSub: '30 minut · bez závazku · ukážeme čísla pro váš trh',
        badge: 'AI SYSTÉM',
      }
    : {
        eyebrow: 'ROI Calculator',
        title: "What's the return?",
        sub: 'Set your average deal size and close rate — the rest are real numbers from the system.',
        dealLabel: 'Average deal value',
        dealMin: '€400',
        dealMax: '€20,000',
        closeLabel: 'Meeting-to-close rate',
        aiTitle: 'SalesAgent.cz',
        aiCost: 'from €239 / month',
        empTitle: 'Sales employee',
        empCost: '~€4,000 / month',
        reached: 'Companies reached',
        replyRate: 'Reply rate',
        closeRateLbl: 'Close rate',
        meetings: 'Meetings',
        newCustomers: 'New customers / month',
        newRevenue: 'New revenue / month',
        cost: 'Cost / month',
        net: 'Net gain / month',
        roi: 'return on investment',
        advNote: (a: string, cr: number, dv: string) =>
          `monthly advantage of the AI system over a sales employee — at ${cr}% close rate and ${dv} deal value.`,
        cta: 'Book a call',
        ctaSub: "30 minutes · no commitment · we'll show numbers for your market",
        badge: 'AI SYSTEM',
      }

  return (
    <section style={{ padding: '88px 24px', background: 'var(--bg)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{
            fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px',
          }}>{t.eyebrow}</p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700, letterSpacing: '-0.025em', marginBottom: '16px',
          }}>{t.title}</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.65 }}>
            {t.sub}
          </p>
        </div>

        {/* Sliders */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '28px' }} className="roi-inputs">
          <SliderCard
            label={t.dealLabel}
            value={fmt(dealValue)}
            min={10000} max={500000} step={5000}
            current={dealValue}
            onChange={setDealValue}
            minLabel={t.dealMin}
            maxLabel={t.dealMax}
          />
          <SliderCard
            label={t.closeLabel}
            value={`${closeRate} %`}
            min={5} max={50} step={1}
            current={closeRate}
            onChange={setCloseRate}
            minLabel="5 %"
            maxLabel="50 %"
          />
        </div>

        {/* Comparison */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }} className="roi-cards">

          {/* AI card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid rgba(255,107,74,0.35)',
            borderRadius: '16px', padding: '28px', position: 'relative',
          }}>
            <span style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'var(--accent)', color: '#0B1320',
              fontSize: '10px', fontWeight: 800, letterSpacing: '0.07em',
              padding: '3px 8px', borderRadius: '4px',
            }}>{t.badge}</span>

            <p style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2px', fontFamily: 'Space Grotesk, sans-serif' }}>{t.aiTitle}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>{t.aiCost}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <StatRow label={t.reached} value={`1 000`} />
              <StatRow label={`${t.replyRate} 2 %`} value={`${MEETINGS} ${cs ? 'schůzek' : 'meetings'}`} accent />
              <StatRow label={t.closeRateLbl} value={`${closeRate} %`} />
              <Divider />
              <StatRow label={t.newCustomers} value={aiCustomers.toFixed(1).replace('.', cs ? ',' : '.')} bold />
              <StatRow label={t.newRevenue} value={fmt(aiRevenue)} bold />
              <StatRow label={t.cost} value={`− ${cs ? '5 900 Kč' : '€239'}`} muted />
            </div>

            <div style={{
              padding: '16px 18px',
              background: aiProfit > 0 ? 'rgba(34,160,107,0.09)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${aiProfit > 0 ? 'rgba(34,160,107,0.22)' : 'var(--border)'}`,
              borderRadius: '10px',
            }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>{t.net}</p>
              <p style={{
                fontSize: '30px', fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                color: aiProfit > 0 ? 'var(--green)' : 'var(--text-muted)',
                letterSpacing: '-0.02em',
              }}>
                {aiProfit > 0 ? '+' : ''}{fmt(aiProfit)}
              </p>
              {aiProfit > 0 && (
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {roiX}× {t.roi}
                </p>
              )}
            </div>
          </div>

          {/* Employee card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '16px', padding: '28px', opacity: 0.8,
          }}>
            <p style={{ fontSize: '15px', fontWeight: 700, marginBottom: '2px', fontFamily: 'Space Grotesk, sans-serif' }}>{t.empTitle}</p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>{t.empCost}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <StatRow label={t.reached} value="800" />
              <StatRow label={`${t.replyRate} 2 %`} value={`16 ${cs ? 'schůzek' : 'meetings'}`} />
              <StatRow label={t.closeRateLbl} value={`${closeRate} %`} />
              <Divider />
              <StatRow label={t.newCustomers} value={empCustomers < 0.05 ? (cs ? '< 0,1' : '< 0.1') : empCustomers.toFixed(1).replace('.', cs ? ',' : '.')} bold />
              <StatRow label={t.newRevenue} value={fmt(empRevenue)} bold />
              <StatRow label={t.cost} value={`− ${cs ? '100 000 Kč' : '€4,000'}`} muted />
            </div>

            <div style={{
              padding: '16px 18px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
            }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '6px' }}>{t.net}</p>
              <p style={{
                fontSize: '30px', fontWeight: 800,
                fontFamily: 'Space Grotesk, sans-serif',
                color: 'var(--text-muted)',
                letterSpacing: '-0.02em',
              }}>
                {fmt(empProfit)}
              </p>
            </div>
          </div>
        </div>

        {/* Advantage callout */}
        {advantage > 0 && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '20px',
            background: 'rgba(34,160,107,0.06)',
            border: '1px solid rgba(34,160,107,0.18)',
            borderRadius: '12px', padding: '20px 24px', marginBottom: '36px',
          }} className="roi-advantage">
            <span style={{
              fontSize: '26px', fontWeight: 800,
              fontFamily: 'Space Grotesk, sans-serif',
              color: 'var(--green)', whiteSpace: 'nowrap', letterSpacing: '-0.02em',
            }}>
              +{fmt(advantage)}
            </span>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              {t.advNote(fmt(advantage), closeRate, fmt(dealValue))}
            </p>
          </div>
        )}

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a
            href={BOOKING_URL}
            target="_blank" rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--accent)', color: '#0B1320',
              fontWeight: 700, fontSize: '16px',
              padding: '14px 40px', borderRadius: '10px',
              textDecoration: 'none',
            }}
          >
            {t.cta}
          </a>
          <p style={{ marginTop: '12px', fontSize: '13px', color: 'var(--text-muted)' }}>{t.ctaSub}</p>
        </div>
      </div>

      <style>{`
        .roi-slider {
          -webkit-appearance: none; appearance: none;
          height: 5px; background: var(--border);
          border-radius: 3px; outline: none; cursor: pointer; width: 100%;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--accent); cursor: pointer;
          border: 3px solid var(--bg-card);
          box-shadow: 0 0 0 1px var(--accent);
          transition: transform 0.1s;
        }
        .roi-slider::-webkit-slider-thumb:active { transform: scale(1.2); }
        .roi-slider::-moz-range-thumb {
          width: 22px; height: 22px; border-radius: 50%;
          background: var(--accent); border: 3px solid var(--bg-card); cursor: pointer;
        }
        @media (max-width: 640px) {
          .roi-inputs, .roi-cards { grid-template-columns: 1fr !important; }
          .roi-advantage { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </section>
  )
}

function SliderCard({
  label, value, min, max, step, current, onChange, minLabel, maxLabel,
}: {
  label: string; value: string
  min: number; max: number; step: number
  current: number; onChange: (v: number) => void
  minLabel: string; maxLabel: string
}) {
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border)',
      borderRadius: '14px', padding: '22px 24px',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '18px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
        <span style={{
          fontSize: '22px', fontWeight: 800, letterSpacing: '-0.02em',
          fontFamily: 'Space Grotesk, sans-serif', color: 'var(--accent)',
        }}>{value}</span>
      </div>
      <input
        type="range" className="roi-slider"
        min={min} max={max} step={step} value={current}
        onChange={e => onChange(Number(e.target.value))}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '11px', color: 'var(--text-muted)' }}>
        <span>{minLabel}</span><span>{maxLabel}</span>
      </div>
    </div>
  )
}

function StatRow({ label, value, bold, accent, muted }: {
  label: string; value: string; bold?: boolean; accent?: boolean; muted?: boolean
}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{label}</span>
      <span style={{
        fontSize: bold ? '14px' : '13px',
        fontWeight: bold ? 700 : 500,
        fontFamily: bold ? 'Space Grotesk, sans-serif' : 'inherit',
        color: accent ? 'var(--accent)' : muted ? 'var(--text-muted)' : bold ? 'var(--text)' : 'var(--text-muted)',
      }}>{value}</span>
    </div>
  )
}

function Divider() {
  return <div style={{ height: '1px', background: 'var(--border)', margin: '2px 0' }} />
}
