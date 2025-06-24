import { useState } from "react";
import { BackEndApi } from "./utils/httpclint";

const Loginpage = () => {
  const [login, setLogin] = useState(false);
  const [signInput, setSignInput] = useState({});
  const handleUserInput = (event) => {
    setSignInput({ ...signInput, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    setLogin(true);
  };
  const handleOnClick = () => {
    setLogin(false);
  };

  const handleUserClick = async () => {
    try {
      const endPoint = login ? "/userAdmin/createUserAdmin" : "/userAdmin/userLoginAdmin";
      const Response = await BackEndApi.post(endPoint, signInput);
      console.log(Response);
      const { token } = Response.data.data;
      localStorage.setItem("authToken", token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="loginCard">
        <div className="fullWhiteCrad">
          <div className="blueCard">
            <h1>{login ? "Sign Up" : "Login"}</h1>
            <h5>
              {login
                ? "Looks like you're new here! Sign up to get started"
                : "Get access to your Orders, Wishlist and Recommendations"}
            </h5>
            <div className="flipkartlogin">
              <img src="/src/assets/images/admin-removebg-preview.png" alt="" />
            </div>
          </div>
          <div className="whiteCard">
            {login ? (
              <>
                <div className="email-number">
                  <label htmlFor="">Full Name</label><br />
                  <input type="text" name="name" onChange={handleUserInput} />
                </div>
                <div className="email-number">
                  <label htmlFor="">Email</label><br />
                  <input type="text" name="email" onChange={handleUserInput} />
                </div>
                <div className="email-number">
                  <label htmlFor="">Phone Number</label><br />
                  <input type="text" name="phone" onChange={handleUserInput} />
                </div>
                <div className="email-number">
                  <label htmlFor="">Password</label><br />
                  <input type="password" name="password" onChange={handleUserInput} />
                </div>
              </>
            ) : (
              <>
                <div className="email-number">
                  <label htmlFor="">Enter Email</label><br />
                  <input type="text" name="loginEmail" onChange={handleUserInput} />
                </div>
                <div className="email-number">
                  <label htmlFor="">Enter Password</label><br />
                  <input type="password" name="loginPassword" onChange={handleUserInput} />
                </div>
              </>
            )}
            <p>
              By continuing, you agree to Flipkart's <span>Terms of Use</span>{" "}
              and <span>Privacy Policy</span>.
            </p>
            <div className="otpBtn">
              <button
                onClick={handleUserClick}
                id="btn"
                value={login ? "Continue" : "Submit"}
              >
                {login ? "Continue" : "Submit"}
              </button>
            </div>
            {login && (
              <div className="loginBtn">
                <button onClick={handleOnClick}>Existing User?Login in</button>
              </div>
            )}
            {!login && (
              <div>
                <h6 onClick={handleClick}>
                  New to Flipkart? Create an account
                </h6>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Loginpage;
