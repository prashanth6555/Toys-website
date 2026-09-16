import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import SpecialOffers from './components/SpecialOffers'
import WhyChoose from './components/WhyChoose'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ProductModal from './components/ProductModal'
import CartDrawer from './components/CartDrawer'
import CheckoutModal from './components/CheckoutModal'
import SearchModal from './components/SearchModal'
import Toast from './components/Toast'
import PageLoader from './components/PageLoader'
import { StoreProvider } from './context/StoreContext'

export default function App() {
  return (
    <StoreProvider>
      <PageLoader />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <SpecialOffers />
        <WhyChoose />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />
      <SearchModal />
      <Toast />
    </StoreProvider>
  )
}
