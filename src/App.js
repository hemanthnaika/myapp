import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'
import Product from './components/Product'
import Order from './components/Order'
import MyOrders from './components/MyOrder'
import AdminPage from './components/AdminPage'


const App = () => {
  return (
    <div>
      <Home />
      <Login />
      <Signup />
      <Products />
      <Product />
      <Order />
      <MyOrders />
      <AdminPage />
    </div>
  );
}

export default App;