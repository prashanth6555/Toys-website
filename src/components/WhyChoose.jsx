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
                initial={{ opacity: 0, y: 40, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: 'spring', stiffness: 180, damping: 18 }}
                whileHover={{ y: -10, rotate: 1 }}
                className="group overflow-hidden rounded-[1.6rem] bg-white shadow-md"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span
                    className={`absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-2xl text-white shadow-lg ${item.accent}`}
                  >
                    <Icon size={20} />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.text}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
