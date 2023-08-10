import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="login-box">
      <h2>Register</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required="" />
          <label htmlFor="">Username</label>
        </div>
        <div className="user-box">
          <input type="email" name="" required="" />
          <label htmlFor="">email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label htmlFor="">Password</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required="" />
          <label htmlFor="">Konfirmasi password</label>
        </div>
        <a href="/signup" className="submit">
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
