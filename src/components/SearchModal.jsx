import { AnimatePresence, motion } from 'framer-motion'
import { Search, Sparkles, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { products } from '../data/siteData'
import { useStore } from '../context/StoreContext'

export default function SearchModal() {
  const { searchOpen, setSearchOpen, setActiveProduct } = useStore()
  const [q, setQ] = useState('')
  const [searched, setSearched] = useState('')

  const term = searched.trim().toLowerCase()
  const hasSearched = term.length > 0

  const results = useMemo(() => {
    if (!term) return []
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.includes(term) ||
        p.description.toLowerCase().includes(term),
    )
  }, [term])

  const close = () => {
    setSearchOpen(false)
    setQ('')
    setSearched('')
  }

  const runSearch = () => setSearched(q)

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-ink/50 p-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            initial={{ y: -24, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl rounded-[1.8rem] bg-white p-5 shadow-2xl"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault()
                runSearch()
              }}
              className="flex items-center gap-2 rounded-full bg-cream px-4"
            >
              <Search size={18} />
              <input
                autoFocus
                value={q}
                onChange={(e) => {
                  setQ(e.target.value)
                  if (!e.target.value.trim()) setSearched('')
                }}
                placeholder="Search teddy, blocks, drone…"
                className="h-12 w-full bg-transparent outline-none"
              />
              <button
                type="submit"
                className="font-display rounded-full bg-coral px-3 py-1.5 text-xs text-white"
              >
                Search
              </button>
              <button type="button" onClick={close} aria-label="Close search">
                <X size={18} />
              </button>
            </form>

            <AnimatePresence mode="wait">
              {!hasSearched ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-6 flex flex-col items-center px-4 py-8 text-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=500&q=80"
                    alt="Colorful toys"
                    className="mb-4 h-28 w-28 rounded-3xl object-cover shadow-md"
                  />
                  <p className="font-display text-lg">Find a toy</p>
                  <p className="mt-1 max-w-sm text-sm text-ink/55">
                    Type a name or category, then hit Search. Suggestions appear only after you search.
                  </p>
                </motion.div>
              ) : (
                <motion.ul
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 max-h-[55vh] space-y-2 overflow-y-auto"
                >
                  {results.map((p, i) => (
                    <motion.li
                      key={p.id}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button
                        type="button"
                        className="flex w-full items-center gap-3 rounded-2xl p-2 text-left transition hover:bg-cream"
                        onClick={() => {
                          close()
                          setActiveProduct(p)
                        }}
                      >
                        <img src={p.image} alt="" className="h-14 w-14 rounded-xl object-cover" />
                        <span>
                          <span className="font-display block">{p.name}</span>
                          <span className="text-xs font-bold text-ink/45 capitalize">{p.category}</span>
                        </span>
                        <span className="ml-auto text-sm font-extrabold">₹{p.price}</span>
                      </button>
                    </motion.li>
                  ))}
                  {results.length === 0 && (
                    <li className="p-6 text-center text-ink/50">
                      <Sparkles className="mx-auto mb-2 text-coral" size={22} />
                      No toys match “{searched}”. Try teddy, blocks, or drone.
                    </li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
