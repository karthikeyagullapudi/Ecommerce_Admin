const Login = () => {
  return (
    <div className="mainlogin">
      <div className="firstcard-login">
        <h1>Admin Login</h1>

        <div className="cardInputs-login">
          <div className="input-group">
            <h4 className="input-label">User Id</h4>
            <input
              type="text"
              placeholder="Enter your email"
              className="login-input"
            />
          </div>
          <div className="input-group">
            <h4 className="input-label">User Password</h4>
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
            />
          </div>
        </div>

        {/* Forgot Password link */}
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>

        {/* Login Button */}
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
