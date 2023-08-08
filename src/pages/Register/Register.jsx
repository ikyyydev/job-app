import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div class="login-box">
      <h2>Register</h2>
      <form action="">
        <div class="user-box">
          <input type="text" name="" required="" />
          <label for="">Username</label>
        </div>
        <div class="user-box">
          <input type="email" name="" required="" />
          <label for="">email</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label for="">Password</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label for="">Konfirmasi password</label>
        </div>
        <a href="/signup" class="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Konfirmasi
        </a>
      </form>
      <div>
        <div className="text-light">Sudah punya akun? </div>
        <a href="/signup" className="text-dark">
          Login
        </a>
      </div>
    </div>
  );
};

export default Register;
