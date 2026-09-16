import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus, Trash2, X } from 'lucide-react'
import { useStore } from '../context/StoreContext'

const rupee = (n) => `₹${n.toLocaleString('en-IN')}`

export default function CartDrawer() {
  const { cart, cartOpen, setCartOpen, updateQty, removeFromCart, cartTotal, openCheckout, checkoutOpen } =
    useStore()

  return (
    <AnimatePresence>
      {cartOpen && !checkoutOpen && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[60] bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            aria-label="Close cart overlay"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 280, damping: 30 }}
            className="fixed top-0 right-0 z-[61] flex h-dvh w-[90%] max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink/10 p-5">
              <h3 className="font-display text-2xl">Your cart</h3>
              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full bg-cream"
                aria-label="Close cart"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto p-5">
              {cart.length === 0 && (
                <p className="pt-10 text-center text-ink/60">Your toy box is empty. Time to explore!</p>
              )}
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3 rounded-2xl bg-cream p-3">
                  <img src={item.image} alt="" className="h-20 w-20 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display truncate">{item.name}</p>
                    <p className="text-sm font-extrabold">{rupee(item.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="grid h-7 w-7 place-items-center rounded-full bg-white"
                        aria-label="Decrease"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-extrabold">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="grid h-7 w-7 place-items-center rounded-full bg-white"
                        aria-label="Increase"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-coral"
                        aria-label="Remove"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-ink/10 p-5">
              <div className="mb-4 flex justify-between font-extrabold">
                <span>Total</span>
                <span>{rupee(cartTotal)}</span>
              </div>
              <button
                type="button"
                disabled={!cart.length}
                onClick={openCheckout}
                className="btn-ripple font-display w-full rounded-full bg-ink py-3 text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
