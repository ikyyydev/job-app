import React from "react";
import "./rekrutkaryawan.css";

export const RekrutKaryawan = () => {
  return (
    <>
      <section className="rekrut" id="rekrut">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h1>Rekrut karyawan dalam 24 jam</h1>
              <ul>
                <li>Kandidat yang terbaik mengubungi anda lewat wa</li>
                <li>Review Lamaran kerja lewat dashboard</li>
                <li>Customer Support bintang 5</li>
              </ul>
              <a href="/" className="btn btn-warning">
                Pasang iklan loker sekarang
              </a>
            </div>
            <div className="col-md">
              <img src="hero.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
