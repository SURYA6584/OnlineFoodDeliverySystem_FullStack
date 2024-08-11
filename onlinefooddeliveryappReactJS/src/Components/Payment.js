import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import img from "../Components/images/adminbg.jpg";

const PaymentPage = () => {
  const { items, cartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // Check if required fields are filled
    if (!paymentMethod || !deliveryAddress) {
      toast.error('Please fill in all the required fields.');
      return;
    }

    // Save payment method and delivery address in local storage
    localStorage.setItem('paymentMethod', paymentMethod);
    localStorage.setItem('deliveryAddress', deliveryAddress);

    // Simulating order placement
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
      {
        pending: 'Placing order...',
        success: 'Order placed successfully!',
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    ).then(() => {
      setTimeout(() => {
        navigate('/home'); // Navigate to the order details page
      }, 2000);
    });
  };

  return (
    <div className="container mark" style={{ backgroundImage: `url(${img})` }}>
      <br />
      <h2 className='text-center'>Order Summary !!</h2>
      <br />

      {items.length > 0 ? (
        <div>
          <table className="table">
            <thead>
              <tr className='table-dark'>
                <th>Restaurant Name</th>
                <th>Price</th>
                <th>Item</th>
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
            </tbody>
          </table>

          <div className="mb-3">
            <h3>Total: ₹{cartTotal}</h3>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <div className="mb-3">
        <label htmlFor="payment-method" className="form-label">
          <b>Payment Method:</b>
        </label>
        <select
          id="payment-method"
          className="form-select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          required
        >
          <option value=""><b>Select Payment Method</b></option>
          <option value="UPI"><b>UPI</b></option>
          <option value="Net Banking"><b>Net Banking</b></option>
          <option value="Cash on Delivery"><b>Cash on Delivery</b></option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="delivery-address" className="form-label">
          <b>Delivery Address:</b>
        </label>
        <input
          type="text"
          id="delivery-address"
          className="form-control"
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          required
        />
      </div>

      <button onClick={handlePlaceOrder} className="btn btn-dark">
        Place Order
      </button>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default PaymentPage;
