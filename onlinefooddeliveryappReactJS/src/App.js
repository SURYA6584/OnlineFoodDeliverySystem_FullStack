import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminLogin from './Components/AdminLogin';
import ListRestautantComponent from './Components/AdminHome';
import AddRestaurant from './Components/AddRestaurant.jsx';
import UpdateRestaurant from './Components/UpdateRestaurant';
import DeleteRestaurant from './Components/DeleteRestautant';
import Try from './Components/Home';
import Cart from './Components/Cart';
import PaymentPage from './Components/Payment';
import OrderDetails from './Components/OrderDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/adminhome" element={<ListRestautantComponent />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/addrestaurant" element={<AddRestaurant />} />
            <Route path="/updaterestaurant" element={<UpdateRestaurant />} />
            <Route path="/deleterestaurant" element={<DeleteRestaurant />} />

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Try />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage/>} />
            <Route path="/orderdetails" element={<OrderDetails/>} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
