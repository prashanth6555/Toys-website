import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-sun/40 blur-3xl" />
        <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-coral/20 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold tracking-wide text-coral uppercase shadow"
          >
            <Sparkles size={14} /> New season of play is here
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl leading-[1.05] font-semibold text-ink sm:text-5xl lg:text-7xl"
          >
            Toys that spark
            <span className="text-coral"> big smiles </span>
            and bigger ideas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-lg text-base text-ink/70 md:text-lg"
          >
            Welcome to IDEALS — a colorful world of educational toys, cuddly friends, outdoor games, and
            remote-control thrills. Safe, joyful, and ready to ship.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#shop"
              className="btn-ripple font-display rounded-full bg-coral px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-coral/30 transition hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="btn-ripple font-display rounded-full bg-white px-7 py-3.5 text-base font-medium text-ink shadow-lg transition hover:scale-105"
            >
              Explore Toys
            </a>
          </motion.div>
          <div className="mt-8 flex gap-8 text-sm font-extrabold">
            <Stat n="12k+" l="Happy kids" />
            <Stat n="4.8★" l="Parent rating" />
            <Stat n="800+" l="Playful SKUs" />
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-lg md:h-[520px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="blob absolute inset-8 bg-gradient-to-br from-sun via-coral to-grape shadow-2xl"
          />
          <motion.img
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=900&q=80"
            alt="Colorful building toys"
            className="absolute top-10 right-6 h-56 w-44 rotate-6 rounded-[2rem] object-cover shadow-2xl md:h-72 md:w-56"
          />
          <motion.img
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.35 }}
            src="https://images.unsplash.com/photo-1558060370-d644479cb6f7?auto=format&fit=crop&w=700&q=80"
            alt="Soft teddy toy"
            className="absolute bottom-8 left-2 h-48 w-40 -rotate-6 rounded-[2rem] object-cover shadow-2xl md:h-64 md:w-52"
          />
          <span className="animate-floaty absolute top-6 left-10 text-5xl md:text-6xl">🚀</span>
          <span className="animate-floaty-slow absolute right-4 bottom-24 text-5xl">🧸</span>
          <span className="animate-wiggle absolute top-1/2 left-1/2 text-4xl">⭐</span>
        </div>
      </motion.div>
    </section>
  )
}

function Stat({ n, l }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{n}</p>
      <p className="text-ink/60">{l}</p>
    </div>
  )
}
