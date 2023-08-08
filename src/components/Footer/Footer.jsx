import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="row link">
            <div className="col-md-3 pb-3">
              <p>JOB</p>
              <li>
                <a href="">Beranda</a>
              </li>
              <li>
                <a href="">Lowongan</a>
              </li>
              <li>
                <a href="">Myjob</a>
              </li>
              <li>
                <a href="">Profil Perusahaan</a>
              </li>
              <li>
                <a href="">Tips Karir</a>
              </li>
            </div>
            <div className="col-md-3 pb-3">
              <p>Info Lowongan</p>
              <li>
                <a href="">Jakarta</a>
              </li>
              <li>
                <a href="">Surabaya</a>
              </li>
              <li>
                <a href="">Semarang</a>
              </li>
              <li>
                <a href="">Yogyakarta</a>
              </li>
              <li>
                <a href="">Bandung</a>
              </li>
              <li>
                <a href="">Cikarang</a>
              </li>
              <li>
                <a href="">Karawang</a>
              </li>
            </div>
            <div className="col-md-3 pb-3">
              <p>Hubungi Kami</p>
              <li>
                <a href="">Whatsapp</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Linkedin</a>
              </li>
              <li>
                <a href="">Facebook</a>
              </li>
            </div>
            <div className="col-md-3">
              <h2>
                JOB<span>.</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col hakcipta">
              <p>
                Hak cipta @2023 Rifki | <a href="">Syarat & Ketentuan</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
