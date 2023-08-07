import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <div className="container mt-auto">
          <div className="row">
            <div className="content col-md">
              <h1>JOB</h1>
              <h2>Platform Pencari Kerja Terpopuler di Indonesia</h2>
              <p>
                dipercaya oleh 10 juta pengguna dan di dukung oleh perusahaan
                ternama
              </p>
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
