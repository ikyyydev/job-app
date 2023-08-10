import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="email" name="" required="" />
          <label htmlFor="">email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label htmlFor="">Password</label>
        </div>
        <Link to={"/"} className="submit">
          {" "}
          <span></span>
          <span></span>
          <span></span>
          <span></span>Submit
        </Link>
      </form>
      <div>
        <div className="text-light">Belum punya akun? </div>
        <Link to={"/register"} className="text-dark">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
