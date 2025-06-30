import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import BackEndApi from "./utils/httpclint";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const handleUserInput = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };
  const hadleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await BackEndApi.post(
        "/userAdmin/userLoginAdmin",
        login
      );
      console.log(response);
      const { token } = response.data.data;
      if (response) {
        navigate("/dashboard");
        localStorage.setItem("authToken", token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginbackground">
        <div className="loginCard1">
          <div className="mainLogin">
            <form action="" onSubmit={hadleSubmit}>
              <div className="clickShop">
                <img src="../../src/assets/images/loginLogo-removebg-preview.png" alt="" />
                <h1>Login</h1>
              </div>

              <div className="loginInputFileds">
                <label htmlFor="username">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email "
                  onChange={handleUserInput}
                />
              </div>

              <div className="loginInputFileds">
                <label htmlFor="username">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password "
                  onChange={handleUserInput}
                />
              </div>
              <div className="subBtn">
                <button type="submit">Submit</button>
              </div>

              <p>Already I have an Account</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
