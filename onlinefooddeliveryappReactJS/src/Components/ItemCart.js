import React, { useEffect, useState } from 'react';

const ItemCard = (props) => {
  return (
    <div className="col-l1 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overfloe-hidden h-100 shadow">
        <img src={props.img} className="card-img-top image-fluid" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-title">{props.desc}</h5>
          <p className="card-text">{props.price}</p>
          <button className="btn btn-warning">
            <b>Add to Cart</b>
          </button>
        </div>
      </div>
    </div>
  );
};

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9090/getAllRestaurant')
      .then((response) => response.json())
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {restaurants.map((restaurants) => (
        <ItemCard
          key={restaurants.id}
          img={restaurants.img}
          title={restaurants.title}
          desc={restaurants.desc}
          price={restaurants.price}
        />
      ))}
    </div>
  );
};

export default RestaurantList;























// import React from 'react';

// const ItemCard = (props) =>{
//     return(
//         <div class="col-l1 col-md-6 col-lg-3 mx-0 mb-4">
//             <div class='card p-0  overfloe-hidden h-100 shadow'>
//                <img src={props.img} class="card-img-top image-fluid" />
//                 <div class="card-body">
//                     <h5 class="card-title">{props.title}</h5>
//                     <h5 class="card-title">{props.desc}</h5>
//                     <p class="card-text">{props.price}</p>
//                     <button className='btn btn-warning'><b>Add to Cart</b></button>
//                 </div>
//             </div> 
//         </div>
//     );
// }

// export default ItemCard;