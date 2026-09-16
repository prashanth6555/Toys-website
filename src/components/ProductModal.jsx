import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, X } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '../context/StoreContext'

const rupee = (n) => `₹${n.toLocaleString('en-IN')}`

export default function ProductModal() {
  const { activeProduct, setActiveProduct, addToCart, toggleWishlist, isWished } = useStore()
  const [qty, setQty] = useState(1)

  return (
    <AnimatePresence>
      {activeProduct && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/50 p-3 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            setActiveProduct(null)
            setQty(1)
          }}
        >
          <motion.div
            initial={{ y: 60, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl md:grid-cols-2"
          >
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="h-64 w-full object-cover md:h-full"
            />
            <div className="relative p-6">
              <button
                type="button"
                onClick={() => {
                  setActiveProduct(null)
                  setQty(1)
                }}
                className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-cream"
                aria-label="Close product details"
              >
                <X size={16} />
              </button>
              <p className="text-xs font-extrabold tracking-widest text-coral uppercase">
                {activeProduct.badge}
              </p>
              <h3 className="font-display mt-2 pr-8 text-3xl">{activeProduct.name}</h3>
              <p className="mt-2 text-xl font-extrabold">
                {rupee(activeProduct.price)}{' '}
                <span className="text-base font-bold text-ink/35 line-through">
                  {rupee(activeProduct.originalPrice)}
                </span>
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/70">{activeProduct.description}</p>
              <div className="mt-6 flex items-center gap-3">
                <p className="text-sm font-extrabold">Qty</p>
                <div className="flex items-center rounded-full bg-cream">
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center font-extrabold">{qty}</span>
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center"
                    onClick={() => setQty((q) => q + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => {
                    addToCart(activeProduct, qty)
                    setActiveProduct(null)
                    setQty(1)
                  }}
                  className="btn-ripple font-display flex-1 rounded-full bg-coral py-3 text-white"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={() => toggleWishlist(activeProduct)}
                  className="font-display rounded-full border-2 border-ink px-4 py-3"
                >
                  {isWished(activeProduct.id) ? 'Wishlisted' : 'Wishlist'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
