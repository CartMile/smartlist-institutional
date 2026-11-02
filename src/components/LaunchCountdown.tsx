import { useEffect, useState } from 'react'
import { useLocale } from '../i18n/LocaleContext'

/** 5 de dezembro de 2026, 00:00 no horário de Brasília. */
const LAUNCH_AT = new Date('2026-12-05T00:00:00-03:00').getTime()

type Props = {
  variant?: 'light' | 'dark'
}

function remaining(now: number) {
  const diff = Math.max(0, LAUNCH_AT - now)
  const totalSeconds = Math.floor(diff / 1000)
  return {
    done: diff === 0,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export function LaunchCountdown({ variant = 'dark' }: Props) {
  const { t } = useLocale()
  const c = t.countdown
  const light = variant === 'light'
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const time = remaining(now)

  if (time.done) {
    return (
      <p
        className={`mt-6 text-sm font-semibold ${light ? 'text-ink' : 'text-lime'}`}
        role="status"
      >
        {c.launched}
      </p>
    )
  }

  const units = [
    { value: String(time.days), label: c.days },
    { value: pad(time.hours), label: c.hours },
    { value: pad(time.minutes), label: c.minutes },
    { value: pad(time.seconds), label: c.seconds },
  ]

  return (
    <div className="mt-6" role="timer" aria-label={c.label}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.14em] ${light ? 'text-ink' : 'text-lime'}`}
      >
        {c.label}
      </p>
      <div className="mt-3 flex gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className={`flex min-w-[4.25rem] flex-1 flex-col items-center rounded-xl px-2 py-2.5 sm:min-w-[4.75rem] sm:flex-none ${
              light ? 'border border-line bg-panel' : 'border border-white/15 bg-white/10 backdrop-blur-sm'
            }`}
          >
            <span
              className={`font-display text-2xl font-semibold tabular-nums sm:text-3xl ${
                light ? 'text-ink' : 'text-white'
              }`}
            >
              {unit.value}
            </span>
            <span
              className={`mt-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                light ? 'text-soft' : 'text-white/70'
              }`}
            >
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
