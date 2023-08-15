import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Personal = () => {
  const [nama, setNama] = useState(localStorage.getItem("nama") || "");
  const [umur, setUmur] = useState(localStorage.getItem("umur") || "");
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [nomor, setNomor] = useState(localStorage.getItem("nomor") || "");
  const [domisili, setDomisili] = useState(
    localStorage.getItem("domisili") || ""
  );
  const [showModal, setShowModal] = useState(false);

  const [newNama, setNewNama] = useState("");
  const [newUmur, setNewUmur] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newNomor, setNewNomor] = useState("");
  const [newDomisili, setNewDomisili] = useState("");

  useEffect(() => {
    localStorage.setItem("nama", nama);
    localStorage.setItem("umur", umur);
    localStorage.setItem("email", email);
    localStorage.setItem("nomor", nomor);
    localStorage.setItem("domisili", domisili);
  }, [nama, umur, email, nomor, domisili]);

  const updateProfil = () => {
    setShowModal(true);

    setNewNama(nama);
    setNewUmur(umur);
    setNewEmail(email);
    setNewNomor(nomor);
    setNewDomisili(domisili);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (newNama || newUmur || newEmail || newNomor || newDomisili) {
      setNama(`${newNama}`);
      setUmur(`${newUmur}`);
      setEmail(`${newEmail}`);
      setNomor(`${newNomor}`);
      setDomisili(`${newDomisili}`);
      handleClose();
    }
  };
  return (
    <>
      <div className="row mt-3 shadow rounded p-3 bg-body-secondary">
        <h2 className="fw-semibold">Personal</h2>
        <hr />
        <div
          className="col-2 border"
          style={{ height: "150px", width: "150px" }}
        >
          <input type="file" className="h-100 w-100" />
        </div>
        <div className="col">
          <p>
            <strong>Nama:</strong> {nama}
          </p>
          <p>
            <strong>Umur:</strong> {umur}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Nomor:</strong> {nomor}
          </p>
          <p>
            <strong>Domisili:</strong> {domisili}
          </p>
        </div>
        <div className="edit d-flex flex-row ms-auto" style={{ height: "12%" }}>
          <Button variant="warning" onClick={updateProfil}>
            <i className="fa-solid fa-pen-to-square"></i>
            Edit
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
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
      </Modal>
    </>
  );
};
