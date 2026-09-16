import { AnimatePresence, motion } from 'framer-motion'
import { Search, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { products } from '../data/siteData'
import { useStore } from '../context/StoreContext'

export default function SearchModal() {
  const { searchOpen, setSearchOpen, setActiveProduct } = useStore()
  const [q, setQ] = useState('')

  const results = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return products.slice(0, 6)
    return products.filter((p) => p.name.toLowerCase().includes(term) || p.category.includes(term))
  }, [q])

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/50 p-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-[1.8rem] bg-white p-5 shadow-2xl"
          >
            <div className="flex items-center gap-2 rounded-full bg-cream px-4">
              <Search size={18} />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search teddy, blocks, drone…"
                className="h-12 w-full bg-transparent outline-none"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={18} />
              </button>
            </div>
            <ul className="mt-4 space-y-2">
              {results.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-2xl p-2 text-left hover:bg-cream"
                    onClick={() => {
                      setSearchOpen(false)
                      setActiveProduct(p)
                    }}
                  >
                    <img src={p.image} alt="" className="h-12 w-12 rounded-xl object-cover" />
                    <span className="font-display">{p.name}</span>
                    <span className="ml-auto text-sm font-extrabold">₹{p.price}</span>
                  </button>
                </li>
              ))}
              {results.length === 0 && <li className="p-4 text-center text-ink/50">No toys match that search.</li>}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
