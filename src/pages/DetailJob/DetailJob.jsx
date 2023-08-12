import React, { useEffect } from "react";
import { useState } from "react";
import "./detail.css";
import { job } from "../../db/job";
import { useParams } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

export const DetailJob = () => {
  const { id } = useParams();
  const [detailJob, setDetailJob] = useState(null);

  useEffect(() => {
    let jobs = job.find((jobs) => jobs.id === parseInt(id));

    if (jobs) {
      setDetailJob(jobs);
    }
  }, []);

  const [show, setShow] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setDisabled(true);
  };

  return (
    <>
      {detailJob ? (
        <section className="detail-job" id="detail-job">
          <div className="container-fluid wrapper d-flex justify-content-center py-2">
            <div className="wrapper-detail col-sm-10 shadow">
              <span className="d-flex justify-content-between align-items-center gap-3">
                <h1 className=" fw-semibold text-dark">{detailJob.posisi}</h1>
                <span className="d-flex align-items-center text-dark ap-2">
                  {detailJob.waktu}
                  <i className="fa-regular fa-clock ms-1"></i>
                </span>
              </span>
              <h6 className="border-bottom pb-1">{detailJob.kota}</h6>
              <div className="company d-flex align-items-center gap-3">
                <span className="fs-5 py-3 fw-bold d-block">
                  {detailJob.perusahaan}
                </span>
              </div>
              <h6>Gaji: {detailJob.gaji}</h6>
              <p className="mt-3">{detailJob.desc}</p>
              <p className="text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                iusto quos ab eos nisi molestias, quia natus quasi autem
                possimus quo nobis est non dolorum dolor magni voluptate, fugiat
                et! Voluptatem deleniti neque ea id ab fugiat rerum, corrupti
                recusandae velit accusantium cumque esse possimus pariatur
                voluptatum deserunt veniam a! Neque rem tempore delectus labore
                libero error. Beatae eum commodi non aspernatur impedit
                deserunt, error minus cumque hic, aut pariatur sunt enim? Harum
                doloremque eius rem voluptate nemo! Expedita vero ad, libero
                quos ut ipsam atque voluptatum similique placeat doloribus sunt
                laudantium repudiandae. Minima exercitationem temporibus
                laboriosam cum, quod reiciendis!
              </p>
              <p className="text-secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                iusto quos ab eos nisi molestias, quia natus quasi autem
                possimus quo nobis est non dolorum dolor magni voluptate, fugiat
                et! Voluptatem deleniti neque ea id ab fugiat rerum, corrupti
                recusandae velit accusantium cumque esse possimus pariatur
                voluptatum deserunt veniam a! Neque rem tempore delectus labore
                libero error. Beatae eum commodi non aspernatur impedit
                deserunt, error minus cumque hic, aut pariatur sunt enim? Harum
                doloremque eius rem voluptate nemo! Expedita vero ad, libero
                quos ut ipsam atque voluptatum similique placeat doloribus sunt
                laudantium repudiandae. Minima exercitationem temporibus
                laboriosam cum, quod reiciendis!
              </p>

              <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                  <Modal.Title>Lamaran Terkirim</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Selamat kamu telah melamar di {detailJob.perusahaan} sebagai{" "}
                  {detailJob.posisi}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Kembali
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button
                className="d-flex btn btn-warning ms-auto"
                onClick={handleShow}
                disabled={disabled}
              >
                {disabled ? "Sudah melamar" : "Lamar"}
              </Button>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};
