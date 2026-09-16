import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const id = window.setTimeout(() => setShow(false), 1600)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-cream"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex gap-3 text-5xl">
            {['🧸', '🚀', '🪀', '🎲'].map((emoji, i) => (
              <motion.span
                key={emoji}
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.12 }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
          <p className="font-display mt-6 text-2xl font-semibold text-ink">IDEALS</p>
          <p className="text-sm font-bold tracking-widest text-coral uppercase">Loading playtime…</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
