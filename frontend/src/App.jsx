import Header from './components/layouts/Header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Products/Product'
import Cart from './components/cart/Cart'
import Register from './components/user/Register'
import Login from './components/user/Login'
import CheckOut from './components/payments/CheckOut'
import Orders from './components/user/Orders'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/category/:category_id" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/checkout" element={<CheckOut />} />
        <Route path="/user/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App