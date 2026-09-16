import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'
import { useState } from 'react'
import { useStore } from '../context/StoreContext'

const rupee = (n) => `₹${n.toLocaleString('en-IN')}`
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
const phoneOk = (v) => /^[6-9]\d{9}$/.test(v.replace(/\s/g, ''))
const pinOk = (v) => /^\d{6}$/.test(v)

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  pincode: '',
  payment: 'upi',
}

export default function CheckoutModal() {
  const { checkoutOpen, closeCheckout, cart, cartTotal, placeOrder } = useStore()
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [placed, setPlaced] = useState(null)

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Enter your full name'
    if (!emailOk(form.email)) next.email = 'Enter a valid email'
    if (!phoneOk(form.phone)) next.phone = 'Enter a 10-digit mobile number'
    if (form.address.trim().length < 8) next.address = 'Enter a delivery address'
    if (form.city.trim().length < 2) next.city = 'Enter your city'
    if (!pinOk(form.pincode)) next.pincode = 'Enter a 6-digit PIN code'
    setErrors(next)
    if (Object.keys(next).length) return

    const order = placeOrder(form)
    if (!order) return
    setPlaced(order)
    setForm(emptyForm)
  }

  const dismiss = () => {
    closeCheckout()
    setPlaced(null)
    setErrors({})
  }

  return (
    <AnimatePresence>
      {checkoutOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/50 p-3 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl md:p-8"
          >
            <button
              type="button"
              onClick={dismiss}
              className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-cream"
              aria-label="Close checkout"
            >
              <X size={16} />
            </button>

            {placed ? (
              <div className="py-6 text-center">
                <CheckCircle2 className="mx-auto text-mint" size={56} />
                <h3 className="font-display mt-4 text-3xl">Order confirmed!</h3>
                <p className="mt-2 text-ink/70">
                  Thanks {placed.details.name}. Your toys are packed and on the way.
                </p>
                <p className="mt-4 font-extrabold">
                  Order ID: <span className="text-coral">{placed.id}</span>
                </p>
                <p className="mt-1 text-sm font-bold">
                  Paid {rupee(placed.total)} via {placed.details.payment.toUpperCase()}
                </p>
                <ul className="mx-auto mt-5 max-w-sm space-y-2 text-left text-sm">
                  {placed.items.map((item) => (
                    <li key={item.id} className="flex justify-between rounded-xl bg-cream px-3 py-2">
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span className="font-extrabold">{rupee(item.price * item.qty)}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={dismiss}
                  className="btn-ripple font-display mt-6 rounded-full bg-coral px-8 py-3 text-white"
                >
                  Keep shopping
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display pr-10 text-3xl">Checkout</h3>
                <p className="mt-1 text-sm text-ink/60">Frontend-only order — no real payment is charged.</p>

                <div className="mt-5 space-y-2 rounded-2xl bg-cream p-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} × {item.qty}
                      </span>
                      <span className="font-extrabold">{rupee(item.price * item.qty)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between border-t border-ink/10 pt-2 font-extrabold">
                    <span>Total</span>
                    <span>{rupee(cartTotal)}</span>
                  </div>
                </div>

                <form onSubmit={submit} className="mt-5 grid gap-3 sm:grid-cols-2">
                  <Field label="Full name" value={form.name} onChange={set('name')} error={errors.name} />
                  <Field label="Email" value={form.email} onChange={set('email')} error={errors.email} />
                  <Field label="Phone" value={form.phone} onChange={set('phone')} error={errors.phone} />
                  <Field label="PIN code" value={form.pincode} onChange={set('pincode')} error={errors.pincode} />
                  <label className="block sm:col-span-2">
                    <span className="mb-1 block text-xs font-extrabold tracking-wide uppercase">Address</span>
                    <input
                      value={form.address}
                      onChange={set('address')}
                      className="h-12 w-full rounded-full bg-cream px-5 outline-none transition focus:ring-4 focus:ring-coral/30"
                    />
                    {errors.address && <span className="text-xs font-bold text-coral">{errors.address}</span>}
                  </label>
                  <Field label="City" value={form.city} onChange={set('city')} error={errors.city} />
                  <label className="block">
                    <span className="mb-1 block text-xs font-extrabold tracking-wide uppercase">Pay with</span>
                    <select
                      value={form.payment}
                      onChange={set('payment')}
                      className="h-12 w-full rounded-full bg-cream px-4 outline-none"
                    >
                      <option value="upi">UPI</option>
                      <option value="card">Debit / Credit card</option>
                      <option value="cod">Cash on delivery</option>
                    </select>
                  </label>
                  <button
                    type="submit"
                    disabled={!cart.length}
                    className="btn-ripple font-display mt-2 rounded-full bg-ink py-3 text-white sm:col-span-2 disabled:opacity-40"
                  >
                    Place order · {rupee(cartTotal)}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Field({ label, value, onChange, error }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-extrabold tracking-wide uppercase">{label}</span>
      <input
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-full bg-cream px-5 outline-none transition focus:ring-4 focus:ring-coral/30"
      />
      {error && <span className="text-xs font-bold text-coral">{error}</span>}
    </label>
  )
}
