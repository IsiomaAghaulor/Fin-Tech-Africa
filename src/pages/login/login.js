import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/Context";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import "./login.css";

const Login = () => {

  const initialValues = { email: " ", password: " " };
  const { dispatch } = useContext(AuthContext);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validate(formValues);
    login();

    setIsSubmit(true);
  };

  const validate = (values) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = regex.test(values.email);
    console.log(validEmail, values);

    if (validEmail === false) {
      setFormErrors({ ...formErrors, email: "invalid email " });
      console.log(formErrors.email);
    }

    if (values.password === "" || values.password.length === 0) {
      setFormErrors({ ...formErrors, password: "password is required" });
      console.log(formErrors.password);
    }
  };

  const login = async () => {
    const response = await axios.post("http://localhost:9005/api/v1/login", {
      email: formValues.email,
      password: formValues.password,
    });
    console.log(response);
    const token = response.data.result.accessToken;
    const decoded = jwt_decode(token);
    console.log(decoded);

    dispatch({ type: "LOGIN", payload: response.data.result.accessToken });
  };

  return (
    <div className="app__Login-container">
      <div className="app__Login-details">
        <h2 className="app__Login-title">Fintech.africa</h2>

        <h2 className="app__Login-subtitle">Hi, Welcome back</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="inputField">
              <label className="app__Login-Label">Email</label>
              <input
                id="email"
                value={formValues.email}
                name="email"
                title="Email"
                placeholder="✉️ Enter your email"
                onChange={handleChange}
              />

              {/* <div className='app__login-icons'>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </div> */}
            </div>

            <div className="inputField">
              <label className="app__Login-Label">Password</label>
              <input
                id="password"
                value={formValues.password}
                name="password"
                type="password"
                title="Password"
                placeholder="🔒 Enter your password"
                onChange={handleChange}
              />
              {/* <div className='app__login-passwordIcon'>
          <FontAwesomeIcon icon="fa-solid fa-lock"/>
          </div> */}
            </div>
          </div>

          <a href="/forgot-password" className="app__forgotPassword">
            Forgot password?
          </a>

          <div className="app__login-buttonDiv">
            <button className="app__login-Button" type="submit">
              Login
            </button>
          </div>
        </form>
        <span>
          Don't have an accout?{" "}
          <a href="/create-account" className="app__create-account">
            create an account
          </a>
        </span>
      </div>
      <div className="app__Login-banner"></div>
    </div>
  );
};

export default Login;
