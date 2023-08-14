import React, { useState } from "react";
import "./user.css";
import { Link } from "react-router-dom";

export const User = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(false);
  };
  return (
    <>
      <div className="profile">
        <div
          className="img border-none"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <img src="people.jpg" alt="" className="ouline-none" />
        </div>

        {profileOpen && (
          <div
            className="openProfile boxItems d-flex flex-column pt-4 pb-2 px-1 shadow rounded gap-2"
            onClick={close}
          >
            <Link to="/account">
              <div className="image d-flex justify-content-center mb-4">
                <div className="img">
                  <img src="people.jpg" alt="Jokowi" />
                </div>
              </div>
            </Link>
            <Link to="/account">
              <div className="box">
                <i className="icon fa-solid fa-user"></i>
                <h4>Akun Saya</h4>
              </div>
            </Link>
            <Link to="/">
              <div className="box">
                <i className="icon fa-solid fa-arrow-right-from-bracket text-danger"></i>
                <h4>Keluar</h4>
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
