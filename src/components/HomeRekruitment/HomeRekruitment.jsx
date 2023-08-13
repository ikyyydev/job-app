import React from "react";
import { Link } from "react-router-dom";

export const HomeRekruitment = () => {
  return (
    <>
      <section className="home-rekruitment">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-6 d-flex bg-warning text-light flex-column gap-3"
              style={{ padding: "90px 40px" }}
            >
              <h3 className="fw-semibold ">Cari Lowongan?</h3>
              <p>
                Kami menawarkan peluang karir lokal bahkan internasional yang
                menarik bagi para profesional terampil dan spesialis
                multibahasa. Kami merekrut di semua tingkatan untuk perusahaan
                terkemuka dunia dan start-up di banyak bidang
              </p>
              <Link
                to={"/findjobs"}
                className="text-decoration-none text-light"
              >
                Ayo Mulai <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
            <div
              className="col-md-6 d-flex flex-column text-light bg-primary gap-3"
              style={{ padding: "90px 40px" }}
            >
              <h3 className="fw-semibold">Cari Kandidat?</h3>
              <p>
                Dengan pengalaman hampir 20 tahun dalam rekrutmen internasional,
                kami telah menjadi mitra banyak perusahaan multinasional dan
                terkemuka
              </p>
              <Link className=" text-decoration-none text-light">
                Ayo Mulai <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
