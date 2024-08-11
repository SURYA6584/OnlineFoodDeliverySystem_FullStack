import React from 'react';
import { useCart } from 'react-use-cart';
import img from "../Components/images/adminbg.jpg";
import { Link } from 'react-router-dom';

const OrderDetails = () => {
  const { items, cartTotal } = useCart();

  // Retrieve payment method and delivery address from local storage
  const paymentMethod = localStorage.getItem('paymentMethod');
  const deliveryAddress = localStorage.getItem('deliveryAddress');

  return (
    <div className="container" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <h1 className='text-center'>Order Details</h1>
      <Link to='/home'>
        <h3 className="text-primary">
          <button className="btn btn-dark">
            <b>MENU</b>
          </button>
        </h3>
      </Link>

      {items.length > 0 ? (
        <table className="table table-striped table-bordered">
          <thead>
            <tr className='table-dark'>
              <th>Restaurant Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td><b>{item.restaurant_name}</b></td>
                <td><b>₹{item.price}</b></td>
                <td><b>{item.cuisine_type}</b></td>
                <td><b>{item.quantity}</b></td>
              </tr>
            ))}
            <tr >
              <th colSpan={2}></th>
              <th  ><b>Payment Method:</b></th>
              <th><b>{paymentMethod}</b></th>
            </tr>
            <tr>
            <th colSpan={2}></th>
              <th ><b>Delivery address:</b></th>
              <th><b>{deliveryAddress}</b></th>            </tr>
          </tbody>
          <tfoot>
            <tr className='table-dark'>

              <td colSpan="3" className="text-end fw-bold">Total:</td>
              <td ><b>₹{cartTotal}</b></td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>Your order is empty.</p>
      )}
    </div>
  );
};

export default OrderDetails;
