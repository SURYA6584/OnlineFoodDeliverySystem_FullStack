import { useState } from "react";
import axios from "axios";
import backgroundImage from "../Components/images/adminbg.jpg";
import { Link } from "react-router-dom";
function DeleteRestaurant() {
  const [restaurantId, setRestaurantId] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:9090/api/v1/deleterestaurant/${restaurantId}`
      );
      alert("Restaurant deleted successfully");
      // Perform any additional actions after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  return (
    <div
      className="container "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        //minWidth:'100vh',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="">
        <form>
          <table className="table ">
            <tbody>
              <tr>
                <th>
                  {" "}
                  <b>
                    <h1>Delete Restaurant</h1>
                  </b>
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    value={restaurantId}
                    placeholder="Enter Restaurant ID"
                    className="form-control"
                    onChange={(event) => setRestaurantId(event.target.value)}
                  />
                </th>
              </tr>
              <tr>
                <br></br>
                <Link to="/adminhome">
                  {" "}
                  <button
                    onClick={handleDelete}
                    className="className='form-control btn btn-danger rounded submit px-3  text-white'"
                  >
                    Delete
                  </button>
                </Link>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default DeleteRestaurant;
