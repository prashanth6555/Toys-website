import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function useCountdown(target) {
  const [left, setLeft] = useState(() => Math.max(0, target - Date.now()))

  useEffect(() => {
    const id = setInterval(() => setLeft(Math.max(0, target - Date.now())), 1000)
    return () => clearInterval(id)
  }, [target])

  const total = Math.floor(left / 1000)
  const days = Math.floor(total / 86400)
  const hours = Math.floor((total % 86400) / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  return { days, hours, minutes, seconds }
}

export default function SpecialOffers() {
  const [endsAt] = useState(() => Date.now() + 1000 * 60 * 60 * 86 + 42_000)
  const { days, hours, minutes, seconds } = useCountdown(endsAt)

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-grape via-coral to-peach p-8 text-white shadow-xl md:p-12"
        >
          <img
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80"
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <span className="animate-floaty absolute top-6 right-8 text-5xl">🎁</span>
          <span className="animate-floaty-slow absolute bottom-8 left-8 text-4xl">🪀</span>
          <div className="relative">
          <p className="text-sm font-extrabold tracking-[0.2em] uppercase">Festival sale</p>
          <h3 className="font-display mt-3 text-4xl md:text-5xl">Up to 40% off seasonal toys</h3>
          <p className="mt-3 max-w-md text-white/85">
            Limited-time sparkle on building sets, plush friends, and outdoor kits. Timer is frontend-only —
            grab the joy while it ticks.
          </p>
          <div className="mt-8 grid grid-cols-4 gap-2 max-w-sm">
            <Tick n={days} l="Days" />
            <Tick n={hours} l="Hrs" />
            <Tick n={minutes} l="Min" />
            <Tick n={seconds} l="Sec" />
          </div>
          <a
            href="#shop"
            className="btn-ripple font-display mt-8 inline-block rounded-full bg-white px-6 py-3 font-medium text-ink transition hover:scale-105"
          >
            Shop the sale
          </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-[2rem] bg-mint p-8 text-ink shadow-xl md:p-12"
        >
          <img
            src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=900&q=80"
            alt="Plush teddy"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <span className="animate-wiggle absolute top-8 right-10 z-10 text-5xl">🧸</span>
          <div className="relative">
          <p className="text-sm font-extrabold tracking-[0.2em] text-white uppercase">Bundle & save</p>
          <h3 className="font-display mt-3 text-4xl text-white">Buy 2 plush, get 1 extra hug</h3>
          <p className="mt-3 max-w-md text-white/90">
            Mix-and-match soft toys for sleepovers, nurseries, and “I need a friend” afternoons.
          </p>
          <a
            href="#categories"
            className="btn-ripple font-display mt-8 inline-block rounded-full bg-ink px-6 py-3 text-white transition hover:scale-105"
          >
            Explore plush
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Tick({ n, l }) {
  return (
    <div className="rounded-2xl bg-white/15 py-3 text-center backdrop-blur">
      <p className="font-display text-2xl">{String(n).padStart(2, '0')}</p>
      <p className="text-[10px] font-extrabold tracking-wider uppercase">{l}</p>
    </div>
  )
}
