import { AnimatePresence, motion } from 'framer-motion'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '../data/siteData'
import { useStore } from '../context/StoreContext'
import Logo from './Logo'

export default function Navbar() {
  const { cartCount, wishlist, setCartOpen, setSearchOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 py-2 shadow-lg shadow-coral/10 backdrop-blur-md' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium text-ink/80 transition hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <IconButton label="Search" onClick={() => setSearchOpen(true)}>
            <Search size={18} />
          </IconButton>
          <a href="#shop" className="relative" aria-label="Wishlist">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-md transition hover:scale-105">
              <Heart size={18} />
            </span>
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-coral px-1 text-[10px] font-extrabold text-white">
                {wishlist.length}
              </span>
            )}
          </a>
          <button
            type="button"
            className="relative"
            aria-label="Open cart"
            onClick={() => setCartOpen(true)}
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white shadow-md transition hover:scale-105">
              <ShoppingBag size={18} />
            </span>
            {cartCount > 0 && (
              <motion.span
                key={cartCount}
                initial={{ scale: 0.4 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full bg-sun px-1 text-[10px] font-extrabold text-ink"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-md lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-ink/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-label="Close menu overlay"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 z-50 flex h-dvh w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-cream"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ x: 24, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * i }}
                    className="font-display rounded-2xl bg-cream px-4 py-3 text-lg text-ink"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

function IconButton({ children, onClick, label }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-md transition hover:scale-105"
    >
      {children}
    </button>
  )
}
