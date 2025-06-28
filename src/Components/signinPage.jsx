import React from "react";

const SigninPage = () => {
  return (
    <>
      <div className="loginbackground">
        <div className="mainLogin">
          <form action="">
            <h1>Admin SignIn</h1>

            <div className="loginInputFileds">
              <label htmlFor="username">Email</label>
              <br />
              <input type="text" name="email" placeholder="Enter Your Email " />
            </div>
            <div className="loginInputFileds">
              <label htmlFor="username">Password</label>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password "
              />
            </div>
            <div className="subBtn">
              <button>Submit</button>
            </div>

            <p>Create an Account</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninPage;
