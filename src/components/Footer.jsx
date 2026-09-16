import { ArrowUp, Camera, Play, Send, Share2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { categories, navLinks } from '../data/siteData'
import Logo from './Logo'
import { useStore } from '../context/StoreContext'

export default function Footer() {
  const { setActiveCategory } = useStore()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="relative overflow-hidden bg-ink pt-16 pb-8 text-white">
      <span className="animate-floaty pointer-events-none absolute top-10 right-10 text-6xl opacity-20">🚀</span>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4 md:px-6">
        <div>
          <div className="inline-block rounded-2xl bg-white p-2">
            <Logo />
          </div>
          <p className="mt-4 text-sm text-white/70">
            IDEALS brings colorful, safe, and smart toys to growing imaginations. Play more. Worry less.
          </p>
          <div className="mt-4 flex gap-2">
            {[Camera, Share2, Send, Play].map((Icon) => (
              <a
                key={Icon.displayName || Icon.name}
                href="#contact"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-coral"
                aria-label="Social"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-sun">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">Toy categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {categories.map((c) => (
              <li key={c.id}>
                <a
                  href="#shop"
                  onClick={() => setActiveCategory(c.id)}
                  className="hover:text-sun"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg">We accept</h4>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-extrabold">
            {['Visa', 'Mastercard', 'UPI', 'PayPal', 'GPay'].map((p) => (
              <span key={p} className="rounded-lg bg-white/10 px-3 py-2">
                {p}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/50">Demo checkout only — no real payments.</p>
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-white/45">
        © {new Date().getFullYear()} IDEALS Kids Toys & Games. Built for play.
      </p>

      {showTop && (
        <motion.a
          href="#home"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed right-5 bottom-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-sun text-ink shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </motion.a>
      )}
    </footer>
  )
}
