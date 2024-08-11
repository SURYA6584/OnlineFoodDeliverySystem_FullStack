import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backgroundImage from "../Components/sideways-asian-dish-with-copy-space.jpg";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:9090/api/v1/adminlogin", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message === "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message === "Login Success") {
              navigate("/adminhome");
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
      <table className="table-sm table-hover ">
        <tbody>
          <tr>
            <th colSpan="2">
              <h1>Admin Login</h1>
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
        </tbody>
      </table>
    </div>
  );
}
export default AdminLogin;
