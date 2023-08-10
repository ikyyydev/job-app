import React from "react";
import "./login.css";

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
        <a href={"/"} className="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <div>
        <div className="text-light">Belum punya akun? </div>
        <a href={"/register"} className="text-dark">
          Register
        </a>
      </div>
    </div>
  );
};

export default Login;
