import { motion } from 'framer-motion'
import { BookOpen, HeartHandshake, ShieldCheck, Sparkles, Truck } from 'lucide-react'
import { whyChoose } from '../data/siteData'
import SectionTitle from './SectionTitle'

const icons = [ShieldCheck, Sparkles, Truck, BookOpen, HeartHandshake]

export default function WhyChoose() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Why IDEALS"
          title="Why families choose us"
          subtitle="Safety, speed, and toys with a point — play that grows with your child."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {whyChoose.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-[1.6rem] bg-white p-5 shadow-md"
              >
                <span className={`mb-4 grid h-12 w-12 place-items-center rounded-2xl text-white ${item.accent}`}>
                  <Icon size={22} />
                </span>
                <h3 className="font-display text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
