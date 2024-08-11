import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../Components/top-view-free-food-delivery-arrangement-with-mock-up_23-2148421291.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:9090/api/v1/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message === "Login Success") {
              navigate("/home");
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }
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
      <Link to="/admin">
        <b>
          <h3
            className="text-primary"
            style={{ marginTop: "-400px", marginLeft: "-400px" }}
          >
            {" "}
            <button className="btn btn-dark">Admin</button>
          </h3>
        </b>
      </Link>
      <table
        className="table-sm table-hover "
        style={{ marginLeft: "110px", marginTop: "-40px" }}
      >
        <tbody>
          <tr>
            <th colSpan="2">
              <h1>Sign In</h1>
            </th>
          </tr>

          <label>
            <b>Email</b>
          </label>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Email"
                size="30"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
              />
            </td>
          </tr>
          <label>
            <b>Password</b>
          </label>
          <tr>
            <td>
              <input
                type="password"
                required
                placeholder="password"
                size="30"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
              />
            </td>
          </tr>

          <tr>
            <th colSpan={2}>
              {" "}
              <input
                type="submit"
                value="Login"
                className="form-control btn btn-dark rounded submit px-3  text-white"
                onClick={login}
              />{" "}
            </th>
          </tr>
          <tr>
            <td colSpan="2">
              <label>
                <b>Not a member?</b>
              </label>
              <Link to="/register">
                <b>Sign UP</b>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Login;
