import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Store from './pages/Store';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast';
import ProductDetails from './Components/ProductDetails'
// import ProductCard from './Components/ProductCard'

const App = () => {
  return (
    <>
    <Toaster position="top-right" />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/product/:id" element={<ProductDetails/>} />
    </Routes>
    
    <Footer />

    </>
  )
}

export default App