import { AnimatePresence, motion } from 'framer-motion'
import { useStore } from '../context/StoreContext'

export default function Toast() {
  const { toast } = useStore()

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white shadow-xl"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
