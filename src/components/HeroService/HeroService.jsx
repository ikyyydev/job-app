import React from "react";
import { Button } from "react-bootstrap";
import "./heroservice.css";

export const HeroService = () => {
  return (
    <>
      <section className="hero-service" id="hero-service">
        <div className="container">
          <div className="row">
            <div className="col-md-8 content">
              <h2>
                Di JOB kami berupaya membantu Anda menemukan lowongan terbaik.
              </h2>
              <p>Melangkahlah menuju masa depan yang penuh potensi.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroServiceDua = () => {
  return (
    <>
      <section className="hero-service-dua" style={{ padding: "100px 10px" }}>
        <div className="container">
          <div className="row gap-3">
            <div className="col-md d-flex flex-column gap-3">
              <h2 className="fs-2 fw-semibold">
                JOB adalah Penyedia layanan SDM dan outsourcing proses bisnis
                terkemuka
              </h2>
              <p className="fs-6">
                Kami adalah perusahaan solusi sumber daya manusia global
                end-to-end yang berfokus untuk membantu pemberi kerja menemukan,
                mempekerjakan, dan mengelola talenta hebat yang mereka butuhkan
                untuk sukses.
              </p>
              <button className="btn btn-warning w-50 fw-semibold">
                Buat profile mu
              </button>
            </div>
            <div className="col-md">
              <img src="service4.jpg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const HeroServiceTiga = () => {
  return (
    <>
      <section className="about-service" id="about-service">
        <div className="container">
          <div className="row">
            <div className="col image">
              <img src="" alt="" />
            </div>
            <div className="col-md-5 pt-5">
              <h3>Bangun tim Anda, dimanapun di dunia</h3>
              <p>
                Dengan dukungan perekrut profesional kami, Anda dapat yakin
                bahwa perusahaan Anda akan mendapatkan karyawan terbaik untuk
                menangani tugas-tugas yang kompleks.
              </p>
              <Button variant="warning" size="lg">
                Mulai
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="candidate" id="candidate">
        <div className="container-fluid">
          <div className="row container-card">
            <div className="col-md-3 shadow content dua">
              <h3>50+</h3>
              <span>HR Manager</span>
            </div>
            <div className="col-md-3 shadow content dua">
              <h3>25K</h3>
              <span>CV Terbaru</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
