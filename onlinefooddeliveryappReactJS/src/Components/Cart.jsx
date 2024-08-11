import React from 'react';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import './cart.css';
import img from "../Components/images/adminbg.jpg"
const Cart = () => {
  const { cartTotal, items, updateItemQuantity, removeItem } = useCart();

  const handleIncrement = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };

  return (
    <div className='container' style={{ backgroundImage: `url(${img})`}}>
      <h2>Cart</h2>
      {items.length > 0 ? (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              {/* Item details */}
              <img src={item.images} alt={item.restaurant_name} className="item-image" />
              <div className="item-details">
                <h3 className="item-name">{item.restaurant_name}</h3>
                <h6 className="">₹{item.price}</h6>
                <p className="item-description">{item.description}</p>
                <div className="item-quantity">
                  <button onClick={() => handleDecrement(item)}><b>-</b></button>
                  <span><b>{item.quantity}</b></span>
                  <button onClick={() => handleIncrement(item)}><b>+</b></button>
                </div>
                <button onClick={() => removeItem(item.id)} className='btn btn-danger'>Remove</button>
              </div>
            </div>
          ))}
          <br />
          {/* Total and Checkout button */}
          <div>
            <h6>Total: ₹{cartTotal}</h6>
            <br />
            <Link to="/payment"><button className="btn btn-dark">Checkout</button></Link>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
