import React from "react";
import { useNavigate } from "react-router-dom";

export const Account = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Halaman Account</h1>
      <button onClick={() => navigate(-1)}>Kembali</button>
    </div>
  );
};
