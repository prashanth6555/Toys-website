import { createContext, useContext, useMemo, useState } from 'react'

const StoreContext = createContext(null)

export function StoreProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [activeProduct, setActiveProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [lastOrder, setLastOrder] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const notify = (message) => {
    setToast(message)
    window.clearTimeout(notify._t)
    notify._t = window.setTimeout(() => setToast(null), 2200)
  }

  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id)
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item,
        )
      }
      return [...prev, { ...product, qty }]
    })
    notify(`${product.name} added to cart`)
  }

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty } : item))
        .filter((item) => item.qty > 0),
    )
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.id === product.id)
      notify(exists ? 'Removed from wishlist' : `${product.name} saved to wishlist`)
      return exists ? prev.filter((item) => item.id !== product.id) : [...prev, product]
    })
  }

  const isWished = (id) => wishlist.some((item) => item.id === id)

  const openCheckout = () => {
    if (!cart.length) {
      notify('Add a toy to your cart first')
      return
    }
    setCartOpen(false)
    setCheckoutOpen(true)
  }

  const placeOrder = (details) => {
    if (!cart.length) {
      notify('Your cart is empty')
      return null
    }
    const order = {
      id: `IDL-${Date.now().toString().slice(-8)}`,
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
      details,
      placedAt: new Date().toISOString(),
    }
    setLastOrder(order)
    setCart([])
    notify('Order placed successfully')
    return order
  }

  const closeCheckout = () => {
    setCheckoutOpen(false)
  }

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const value = useMemo(
    () => ({
      cart,
      wishlist,
      activeProduct,
      setActiveProduct,
      cartOpen,
      setCartOpen,
      checkoutOpen,
      setCheckoutOpen,
      lastOrder,
      searchOpen,
      setSearchOpen,
      toast,
      activeCategory,
      setActiveCategory,
      addToCart,
      updateQty,
      removeFromCart,
      toggleWishlist,
      isWished,
      openCheckout,
      placeOrder,
      closeCheckout,
      cartCount,
      cartTotal,
    }),
    [
      cart,
      wishlist,
      activeProduct,
      cartOpen,
      checkoutOpen,
      lastOrder,
      searchOpen,
      toast,
      activeCategory,
      cartCount,
      cartTotal,
    ],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
