import { AnimatePresence, motion } from 'framer-motion'
import { products, categories } from '../data/siteData'
import { useStore } from '../context/StoreContext'
import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'

export default function FeaturedProducts() {
  const { activeCategory, setActiveCategory } = useStore()
  const filters = [{ id: 'all', name: 'All Toys' }, ...categories]
  const list =
    activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="shop" className="bg-white/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle
          eyebrow="Featured"
          title="Toys kids actually play with"
          subtitle="Twelve crowd-pleasers with zoom-on-hover photos, wishlist hearts, and one-tap carts."
        />
        <div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setActiveCategory(f.id)}
              className={`font-display shrink-0 rounded-full px-4 py-2 text-sm transition ${
                activeCategory === f.id ? 'bg-ink text-white' : 'bg-cream text-ink hover:bg-sun'
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {list.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: (i % 4) * 0.04 }}
              >
                <ProductCard product={product} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
