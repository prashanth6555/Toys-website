import { Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function Newsletter() {
  const [news, setNews] = useState({ email: '', ok: '', err: '' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState('')

  const subscribe = (e) => {
    e.preventDefault()
    if (!emailOk(news.email)) {
      setNews({ ...news, err: 'Please enter a valid email.', ok: '' })
      return
    }
    setNews({ email: '', err: '', ok: 'You’re on the list — watch for playful drops!' })
  }

  const send = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!emailOk(form.email)) next.email = 'Valid email is required'
    if (form.message.trim().length < 8) next.message = 'Tell us a bit more (8+ characters)'
    setErrors(next)
    if (Object.keys(next).length) return
    setSent('Message received (frontend demo). We’ll reply with stickers and answers!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Stay in touch"
          title="Newsletter & contact"
          subtitle="Get launch-day toys in your inbox, or ping us about gifts, ages, and orders."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.form
            onSubmit={subscribe}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-gradient-to-br from-sun to-peach p-8"
          >
            <h3 className="font-display text-3xl text-ink">Playtime newsletter</h3>
            <p className="mt-2 text-ink/70">Weekly finds, safety tips, and surprise coupons.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                value={news.email}
                onChange={(e) => setNews({ ...news, email: e.target.value, err: '', ok: '' })}
                placeholder="you@email.com"
                className="h-12 flex-1 rounded-full bg-white px-5 outline-none ring-offset-2 transition focus:ring-4 focus:ring-white/70"
              />
              <button type="submit" className="btn-ripple font-display h-12 rounded-full bg-ink px-6 text-white">
                Subscribe
              </button>
            </div>
            {news.err && <p className="mt-3 text-sm font-bold text-coral">{news.err}</p>}
            {news.ok && <p className="mt-3 text-sm font-bold text-ink">{news.ok}</p>}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] bg-white p-8 shadow-md"
          >
            <div className="mb-6 grid gap-3 text-sm font-bold sm:grid-cols-3">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-coral" /> hello@ideals.toys
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-mint" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-grape" /> Play Street, Pune
              </p>
            </div>
            <form onSubmit={send} className="space-y-3">
              <Field
                label="Name"
                value={form.name}
                error={errors.name}
                onChange={(v) => setForm({ ...form, name: v })}
              />
              <Field
                label="Email"
                value={form.email}
                error={errors.email}
                onChange={(v) => setForm({ ...form, email: v })}
              />
              <label className="block">
                <span className="mb-1 block text-xs font-extrabold tracking-wide uppercase">Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-2xl bg-cream px-4 py-3 outline-none transition focus:ring-4 focus:ring-mint/40"
                />
                {errors.message && <span className="text-xs font-bold text-coral">{errors.message}</span>}
              </label>
              <button type="submit" className="btn-ripple font-display w-full rounded-full bg-coral py-3 text-white">
                Send message
              </button>
              {sent && <p className="text-sm font-bold text-mint">{sent}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, value, onChange, error }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-extrabold tracking-wide uppercase">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-full bg-cream px-5 outline-none transition focus:ring-4 focus:ring-coral/30"
      />
      {error && <span className="text-xs font-bold text-coral">{error}</span>}
    </label>
  )
}
