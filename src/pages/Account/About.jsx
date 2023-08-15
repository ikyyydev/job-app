import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const About = () => {
  const [deskripsi, setDeskripsi] = useState(localStorage.getItem("deskripsi"));
  const [showModal, setShowModal] = useState(false);

  const [newDeskripsi, setNewDeskripsi] = useState("");

  useEffect(() => {
    localStorage.setItem("deskripsi", deskripsi);
  }, [deskripsi]);

  const updateProfil = () => {
    setShowModal(true);

    setNewDeskripsi(deskripsi);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (newDeskripsi) {
      setDeskripsi(`${newDeskripsi}`);
      handleClose();
    }
  };
  return (
    <>
      <div className="row mt-5 shadow rounded p-3 bg-body-secondary">
        <h2 className="fw-semibold">Tentang Saya</h2>
        <hr />
        <div className="col">
          <p>
            <strong>Deskripsi:</strong>
            <br /> {deskripsi}
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
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Deskripsi"
                value={newDeskripsi}
                onChange={(e) => setNewDeskripsi(e.target.value)}
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
