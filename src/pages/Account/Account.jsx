import React from "react";
import { Personal } from "./Personal";
import { About } from "./About";
import { useNavigate } from "react-router-dom";
import "./account.css";
import { Education } from "./Education";
import { Pengalaman } from "./Pengalaman";
// import { useState } from "react";
// import { Form } from "react-bootstrap";
// import { Button, Modal } from "react-bootstrap";
// import { useEffect } from "react";

export const Account = () => {
  const navigate = useNavigate();

  // const [nama, setNama] = useState(
  //   localStorage.getItem("nama") || "Klik edit untuk mengubah"
  // );
  // const [umur, setUmur] = useState(localStorage.getItem("umur") || "");
  // const [email, setEmail] = useState(localStorage.getItem("email") || "");
  // const [nomor, setNomor] = useState(localStorage.getItem("nomor") || "");
  // const [domisili, setDomisili] = useState(
  //   localStorage.getItem("domisili") || ""
  // );
  // const [showModal, setShowModal] = useState(false);

  // const [newNama, setNewNama] = useState("");
  // const [newUmur, setNewUmur] = useState("");
  // const [newEmail, setNewEmail] = useState("");
  // const [newNomor, setNewNomor] = useState("");
  // const [newDomisili, setNewDomisili] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("nama", nama);
  //   localStorage.setItem("umur", umur);
  //   localStorage.setItem("email", email);
  //   localStorage.setItem("nomor", nomor);
  //   localStorage.setItem("domisili", umur);
  // }, [nama, umur, email, nomor, domisili]);

  // const updateProfil = () => {
  //   setShowModal(true);

  //   setNewNama(nama);
  //   setNewUmur(umur);
  //   setNewEmail(email);
  //   setNewNomor(nomor);
  //   setNewDomisili(domisili);
  // };

  // const handleClose = () => {
  //   setShowModal(false);
  // };

  // const handleSave = () => {
  //   if (newNama || newUmur || newEmail || newNomor || newDomisili) {
  //     setNama(`${newNama}`);
  //     setUmur(`${newUmur}`);
  //     setEmail(`${newEmail}`);
  //     setNomor(`${newNomor}`);
  //     setDomisili(`${newDomisili}`);
  //     handleClose();
  //   }
  // };
  return (
    <>
      <div className="profil py-3 px-3">
        <div className="container d-flex justify-content-center flex-column">
          <h1 className="text-center fs-1 fw-bold">Profil Saya</h1>
          <About />
          <Personal />
          <Education />
          <Pengalaman />
          {/* <div className="row mt-5">
            <h2 className="fw-semibold">Personal</h2>
            <hr />
            <div
              className="col-2 border"
              style={{ height: "150px", width: "150px" }}
            >
              <input type="file" className="h-100 w-100" />
            </div>
            <div className="col">
              <p>Nama: {nama}</p>
              <p>umur: {umur}</p>
              <p>Email: {email}</p>
              <p>Nomor HP: {nomor}</p>
              <p>Domisili: {domisili}</p>
            </div>
          </div>
          <Button
            variant="primary"
            className="mt-3 w-25 ms-auto"
            onClick={updateProfil}
          >
            Edit
          </Button> */}
          <button
            className="btn btn-success w-25 my-5 mx-auto"
            onClick={() => navigate("/")}
          >
            Konfirmasi
          </button>
        </div>
      </div>

      {/* <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama"
                value={newNama}
                onChange={(e) => setNewNama(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formUmur">
              <Form.Label>Umur</Form.Label>
              <Form.Control
                type="text"
                placeholder="Umur"
                value={newUmur}
                onChange={(e) => setNewUmur(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formNomor">
              <Form.Label>Nomor HP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nomor"
                value={newNomor}
                onChange={(e) => setNewNomor(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formDomisili">
              <Form.Label>Domisili</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Domisili"
                value={newDomisili}
                onChange={(e) => setNewDomisili(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
