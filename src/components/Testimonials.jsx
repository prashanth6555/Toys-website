import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { testimonials } from '../data/siteData'
import SectionTitle from './SectionTitle'

export default function Testimonials() {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % testimonials.length), 5200)
    return () => clearInterval(id)
  }, [])

  const item = testimonials[i]

  return (
    <section className="bg-ink py-16 text-white md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionTitle
          light
          eyebrow="Love notes"
          title="What parents are saying"
          subtitle="Real feedback from families who filled their playrooms with IDEALS."
        />
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="rounded-[2rem] bg-white/8 p-8 text-center"
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="mx-auto mb-4 h-20 w-20 rounded-full object-cover ring-4 ring-sun"
              />
              <div className="mb-3 flex justify-center gap-1 text-sun">
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-xl leading-relaxed md:text-2xl">“{item.quote}”</p>
              <footer className="mt-5">
                <p className="font-extrabold">{item.name}</p>
                <p className="text-sm text-white/60">{item.role}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setI((n) => (n - 1 + testimonials.length) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            {testimonials.map((t, idx) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show review ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2.5 rounded-full transition-all ${i === idx ? 'w-8 bg-sun' : 'w-2.5 bg-white/30'}`}
              />
            ))}
            <button
              type="button"
              onClick={() => setI((n) => (n + 1) % testimonials.length)}
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
