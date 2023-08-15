import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => {
    toast.success("Sukses Buat Akun", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      notify();
      setEmail("");
      setPassword("");
      userCredential();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="container col-md-8 col-10 d-flex justify-content-center align-items-center w-100 min-vh-100 border "
      style={{ background: "#26a8ff" }}
    >
      <div className="register-box  bg-light d-flex text-center shadow rounded p-5 flex-column gap-3">
        <h2 className="fs-2 fw-bold">Register</h2>
        <form onSubmit={handleSignup} className="d-flex flex-column gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" email"
            required=""
            className="border p-2"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required=""
            className="border p-2"
          />
          <button className="btn btn-primary" onSubmit={handleSignup}>
            Konfirmasi
          </button>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
        <div>
          <div className="text-dark fw-medium d-flex gap-1">
            Sudah punya akun?
            <Link to={"/signin"}>Masuk</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
