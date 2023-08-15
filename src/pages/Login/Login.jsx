import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const notifyError = () => {
    toast.error("Username atau Password salah", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const signIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div
      className="container col-md-8 col-10 d-flex justify-content-center align-items-center w-100 min-vh-100 border "
      style={{ background: "#26a8ff" }}
    >
      <div className="login-box bg-light d-flex text-center shadow rounded p-5 flex-column gap-3">
        <h2 className="fs-2 fw-bold">Login</h2>
        <form onSubmit={signIn} className="d-flex flex-column gap-3">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Masukan email"
            value={email}
            required=""
            className="border p-2"
            autoFocus
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Masukan password"
            value={password}
            required=""
            className="border p-2"
          />
          <button className="btn btn-primary" onSubmit={signIn}>
            Login
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
            Belum punya akun?
            <Link to={"/signup"}>Daftar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
