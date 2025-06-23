import React, { useState } from "react";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    passwordCon: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
    setErrors({});
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      passwordCon: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 6)
      newErrors.name = "Please enter at least 6 characters";

    if (!formData.email) newErrors.email = "Please enter your email address";

    if (!formData.password || formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (formData.password !== formData.passwordCon)
      newErrors.passwordCon = "Passwords don't match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login successful (mock)");
  };

  const reset = () => {
    setSubmitted(false);
    setIsLogin(true);
  };

  return (
    <div className="container">
      <section id="formHolder">
        <div className="row">
          {/* Brand Side */}
          <div className={`col-sm-6 brand ${submitted ? "active" : ""}`}>
            <a href="#" className="logo">
              Nothing <span>.</span>
            </a>
            <div className={`heading ${submitted ? "active" : ""}`}>
              <h2>Brand</h2>
              <p>Your Right Choice</p>
            </div>
            {submitted && (
              <div className="success-msg">
                <p className="active">Great! You are one of our members now</p>
                <a href="#" className="profile active" onClick={reset}>
                  Your Profile
                </a>
              </div>
            )}
          </div>

          {/* Form Side */}
          {!submitted && (
            <div className="col-sm-6 form">
              <div className={`login form-peice ${isLogin ? "switched" : ""}`}>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                  <div className="form-group">
                    <label
                      htmlFor="loginemail"
                      className={formData.loginemail ? "active" : ""}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="loginemail"
                      name="loginemail"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="loginPassword">Password</label>
                    <input
                      type="password"
                      id="loginPassword"
                      name="loginPassword"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="CTA">
                    <input type="submit" value="Login" />
                    <a href="#" className="switch" onClick={toggleForm}>
                      I'm New
                    </a>
                  </div>
                </form>
              </div>

              <div
                className={`signup form-peice ${!isLogin ? "switched" : ""}`}
              >
                <form className="signup-form" onSubmit={handleSubmit}>
                  <div
                    className={`form-group ${errors.name ? "hasError" : ""}`}
                  >
                    <label
                      htmlFor="name"
                      className={formData.name ? "active" : ""}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <span className="error">{errors.name}</span>
                  </div>
                  <div
                    className={`form-group ${errors.email ? "hasError" : ""}`}
                  >
                    <label
                      htmlFor="email"
                      className={formData.email ? "active" : ""}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <span className="error">{errors.email}</span>
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number - <small>Optional</small>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div
                    className={`form-group ${
                      errors.password ? "hasError" : ""
                    }`}
                  >
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="pass"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <span className="error">{errors.password}</span>
                  </div>
                  <div
                    className={`form-group ${
                      errors.passwordCon ? "hasError" : ""
                    }`}
                  >
                    <label htmlFor="passwordCon">Confirm Password</label>
                    <input
                      type="password"
                      name="passwordCon"
                      id="passwordCon"
                      className="passConfirm"
                      value={formData.passwordCon}
                      onChange={handleInputChange}
                    />
                    <span className="error">{errors.passwordCon}</span>
                  </div>
                  <div className="CTA">
                    <input type="submit" value="Signup Now" />
                    <a href="#" className="switch" onClick={toggleForm}>
                      I have an account
                    </a>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
