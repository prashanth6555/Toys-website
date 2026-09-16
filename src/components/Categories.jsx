import { motion } from 'framer-motion'
import { categories } from '../data/siteData'
import { useStore } from '../context/StoreContext'
import SectionTitle from './SectionTitle'

export default function Categories() {
  const { setActiveCategory } = useStore()

  return (
    <section id="categories" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Play worlds"
          title="Shop by Categories"
          subtitle="Tap a world of toys — from quiet learning corners to high-speed outdoor fun."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.id}
              href="#shop"
              onClick={() => setActiveCategory(cat.id)}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-[1.8rem] shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-70 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-5 text-white">
                <p className="font-display text-2xl">{cat.name}</p>
                <p className="text-sm font-bold text-white/80">{cat.count} toys</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
