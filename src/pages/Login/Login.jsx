import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div class="login-box">
      <h2>Login</h2>
      <form action="">
        <div class="user-box">
          <input type="email" name="" required="" />
          <label for="">email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label for="">Password</label>
        </div>
        <a href="#" class="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <div>
        <div className="text-light">Belum punya akun? </div>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Login;
