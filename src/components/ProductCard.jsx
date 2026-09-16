import { motion } from 'framer-motion'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { useStore } from '../context/StoreContext'

const rupee = (n) => `₹${n.toLocaleString('en-IN')}`

export default function ProductCard({ product, index = 0 }) {
  const { addToCart, toggleWishlist, isWished, setActiveProduct } = useStore()
  const wished = isWished(product.id)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 4) * 0.08, duration: 0.45 }}
      whileHover={{ y: -8, rotate: -0.4 }}
      className="group flex flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-md shadow-ink/5"
    >
      <button
        type="button"
        onClick={() => setActiveProduct(product)}
        className="relative overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 rounded-full bg-sun px-3 py-1 text-[11px] font-extrabold text-ink">
          {product.badge}
        </span>
      </button>
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-1 text-sm font-extrabold text-peach">
          <Star size={14} fill="currentColor" />
          {product.rating}
          <span className="font-bold text-ink/40">({product.reviews})</span>
        </div>
        <h3 className="font-display text-lg leading-snug">{product.name}</h3>
        <p className="mt-1 text-sm font-extrabold">
          {rupee(product.price)}{' '}
          <span className="font-bold text-ink/35 line-through">{rupee(product.originalPrice)}</span>
        </p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="btn-ripple font-display flex flex-1 items-center justify-center gap-2 rounded-full bg-coral py-2.5 text-sm text-white transition hover:scale-[1.03]"
          >
            <ShoppingBag size={15} /> Add to Cart
          </button>
          <button
            type="button"
            onClick={() => toggleWishlist(product)}
            aria-label="Toggle wishlist"
            className={`grid h-11 w-11 place-items-center rounded-full transition hover:scale-110 ${
              wished ? 'bg-coral text-white' : 'bg-cream text-coral'
            }`}
          >
            <Heart size={16} fill={wished ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
