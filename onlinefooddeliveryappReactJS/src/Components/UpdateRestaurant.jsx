import { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "../Components/images/adminbg.jpg";
import { Link, useNavigate } from "react-router-dom";

function UpdateRestaurant() {
  const [restaurant_name, setRestaurant_name] = useState("");
  const [location, setLocation] = useState("");
  const [cuisine_type, setCuisine_type] = useState("");
  const [phone, setPhone] = useState("");
  const [price, setPrice] = useState("");
  const [restaurant_id, setRestaurant_id] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9090/api/v1/getRestarauntById/${restaurant_id}`
        );
        const restaurantData = response.data; // Assuming response is in JSON format
        setRestaurant_name(restaurantData.restaurant_name);
        setLocation(restaurantData.location);
        setCuisine_type(restaurantData.cuisine_type);
        setPhone(restaurantData.phone);
        setPrice(restaurantData.price);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch restaurant data when component mounts
    fetchRestaurantData();
  }, [restaurant_id]);

  async function save(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:9090/api/v1/updaterestaurant", {
        restaurant_name,
        location,
        cuisine_type,
        phone,
        restaurant_id,
        price,
      });
      alert("Restaurant updated successfully");
      navigate("/adminhome");
    } catch (err) {
      alert(err.message);
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
          <b>Update Restaurant</b>
        </h1>
        <br></br>
        <table className="table table-hover table-bordered table-light table-striped">
          <tbody>
            <tr>
              <th>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Restaurant Id"
                  size="30"
                  value={restaurant_id}
                  required
                  onChange={(event) => setRestaurant_id(event.target.value)}
                />
              </th>
            </tr>
            <br></br>
            <tr>
              <th>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Restaurant Name"
                  value={restaurant_name}
                  required
                  onChange={(event) => setRestaurant_name(event.target.value)}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item"
                  value={cuisine_type}
                  required
                  onChange={(event) => setCuisine_type(event.target.value)}
                />
              </th>
            </tr>
            <tr>
              <th>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  required
                  onChange={(event) => setPrice(event.target.value)}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  className="form-control"
                  placeholder="phone number"
                  value={phone}
                  required
                  onChange={(event) => setPhone(event.target.value)}
                />
              </th>
            </tr>

            <tr>
              <th>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Location"
                  value={location}
                  required
                  onChange={(event) => setLocation(event.target.value)}
                />
              </th>
            </tr>

            <br />
            <tr>
              <th colSpan={2}>
                <Link to="/">
                  <button
                    type="submit"
                    value="Login"
                    className="form-control btn btn-primary rounded submit px-3 btn-dark text-white"
                    onClick={save}
                  >
                    <b>Update</b>
                  </button>
                </Link>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default UpdateRestaurant;
