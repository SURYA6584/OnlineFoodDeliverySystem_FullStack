// Try.jsx
import React, { useEffect } from 'react';
import showAllRestaurants from '../Services/HomeServiceComponent';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import img from './images/adminbg.jpg';
import logo from './images/pngegg (1).png';

const Try = () => {
  const { addItem } = useCart();
  const [listRestaurant, setListRestaurant] = React.useState([]);

  useEffect(() => {
    showAllRestaurants
      .getAllRestaurants()
      .then((res) => {
        setListRestaurant(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleAddToCart = (restaurant) => {
    alert("Added to cart !!")
    const { restaurant_id, ...rest } = restaurant;
    addItem({ id: restaurant_id, ...rest });
  };

  return (
    <div className='container' style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className='row align-items-center'>
        <div className='col-3'>
          <img src={logo} alt='Logo' className='logo img-fluid' />
        </div>
        <div className='col-6 text-center'>
          <h1 className='text-dark'>
            <b>DineXpress</b>
          </h1>
        </div>
      </div>
      <div>
        <Link to='/cart'>
          <b>
            <h3 style={{ marginTop: '10px', marginLeft: '1010px' }}>
              <button className='btn btn-dark'>🛒 View Cart</button>
            </h3>
          </b>
        </Link>
        <Link to='/orderdetails'>
          <b>
            <h3 style={{ marginTop: '-45px', marginLeft: '900px' }}>
              <button className='btn btn-dark'>🛍️ Orders</button>
            </h3>
          </b>
        </Link>
        <Link to='/'>
          <b>
            <h3 style={{ marginTop: '-50px', marginLeft: '1140px' }}>
              <button className='btn btn-dark'>🔒 Logout</button>
            </h3>
          </b>
        </Link>
      </div>
      <br />
      <br />
      <div className='row'>
        {listRestaurant.map((restaurant) => (
          <div className='col-lg-3 col-md-6 mb-4' key={restaurant.restaurant_id}>
            <div className='card p-0 overfloe-hidden h-100 shadow'>
              <img
                src={restaurant.images}
                className='card-img-top image-fluid restaurant-image'
                alt={restaurant.restaurant_name}
              />
              <div className='card-body d-flex flex-column'>
                <h4 className='card-text'>{restaurant.restaurant_name}</h4>
                <h5 className='card-title'>Item: {restaurant.cuisine_type}</h5>
                <h5 className='card-title'>Price: ₹{restaurant.price}</h5>
                <h5 className='card-title'>Location: {restaurant.location}</h5>
                <button
                  className='btn btn-dark mt-auto'
                  onClick={() => handleAddToCart(restaurant)}
                >
                  <b>Add to Cart</b>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Try;
