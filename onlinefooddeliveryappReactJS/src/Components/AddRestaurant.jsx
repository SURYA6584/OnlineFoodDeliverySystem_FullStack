import { useState } from "react";

import axios from "axios";
import backgroundImage from "../Components/images/adminbg.jpg";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [restaurant_name, setRestaurant_name] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine_type, setCuisine_type] = useState("");
  const [phone, setPhone] = useState("");
  const [restaurant_id, setRestaurant_id] = useState("");
  const [images, setImages] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:9090/api/v1/addrestaurant", {
        restaurant_name: restaurant_name,
        location: location,
        cuisine_type: cuisine_type,
        phone: phone,
        restaurant_id: restaurant_id,
        images: images,
        price: price,
      });
      alert("Restaurant added Successfully");
      navigate("/adminhome");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="form-control-lg">
        <h1>
          <b>Add Restaurant</b>
          <br></br>
          <br></br>
        </h1>
        <table className="table table-hover table-bordered table-light table-striped ">
          <tr>
            <th>
              {" "}
              <input
                type="text"
                class="form-control"
                placeholder="Restaurant Id"
                size="30"
                value={restaurant_id}
                required
                onChange={(event) => {
                  setRestaurant_id(event.target.value);
                }}
              />
            </th>
          </tr>
          <br></br>
          <tr>
            <th>
              {" "}
              <input
                type="text"
                class="form-control"
                placeholder="Restaurant Name"
                value={restaurant_name}
                required
                onChange={(event) => {
                  setRestaurant_name(event.target.value);
                }}
              />
            </th>
          </tr>
          <br></br>
          <tr>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Item Name"
                value={cuisine_type}
                required
                onChange={(event) => {
                  setCuisine_type(event.target.value);
                }}
              />
            </th>
          </tr>

          <br></br>
          <tr>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Phone Number"
                value={phone}
                required
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />
            </th>
          </tr>

          <br></br>
          <tr>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Restaurant Image"
                value={images}
                required
                onChange={(event) => {
                  setImages(event.target.value);
                }}
              />
            </th>
          </tr>
          <br></br>
          <tr>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Price"
                value={price}
                required
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </th>
          </tr>

          <br></br>

          <tr>
            <th>
              <input
                type="text"
                class="form-control"
                placeholder="Location"
                value={location}
                required
                onChange={(event) => {
                  setLocation(event.target.value);
                }}
              />
            </th>
          </tr>

          <br></br>
          <tr>
            <th colSpan={2}>
              <Link to="/">
                {" "}
                <button
                  type="submit"
                  value="Login"
                  className="form-control btn btn-primary rounded submit px-3 btn-dark text-white"
                  onClick={save}
                >
                  <b>Add</b>
                </button>
              </Link>
            </th>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Register;
