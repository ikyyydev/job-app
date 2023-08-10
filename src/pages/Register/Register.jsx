import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

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
        <Link to={"/signup"} className="submit">
          {" "}
          <span></span>
          <span></span>
          <span></span>
          <span></span>Submit
        </Link>
      </form>
      <div>
        <div className="text-light">Sudah punya akun? </div>
        <Link to={"/signup"} className="text-dark">
          Masuk
        </Link>
      </div>
    </div>
  );
};

export default Register;
