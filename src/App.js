import Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Products from './components/Products'
import Product from './components/Product/Product'
import Order from './components/Order'
// import MyOrders from './components/MyOrder'
import AdminPage from './components/AdminPage'
import Navbar from './layout/Navbar'
import PrivateRoute from "./routing/PrivateRoute";
import { Routes, Route } from 'react-router-dom'
import {Toaster}from 'react-hot-toast'
import Footer from './layout/Footer'
import Admin from "./components/admin/Admin";
const App = () => {
  return (
    <div >
      {/* Add the Toaster in div  */}
     
      <div><Toaster/></div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<PrivateRoute child={<Login />} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/shop' element={<Products />} />
        {/* <Route path='/shop/:productId' element={<Product />} /> */}
        <Route path='/shop/:productId' element={<Product />} />
        <Route path='/admin' element={<Admin />} />
        {/* <Route path='/Order' element={<Order />} /> */}

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;