import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Pengalaman = () => {
  const [perusahaan, setPerusahaan] = useState(
    localStorage.getItem("perusahaan") || ""
  );
  const [namaPekerjaan, setNamaPekerjaan] = useState(
    localStorage.getItem("namaPekerjaan") || ""
  );
  const [tipe, setTipe] = useState(localStorage.getItem("tipe") || "");
  const [tanggal, setTanggal] = useState(localStorage.getItem("tanggal") || "");
  const [deskripsi, setDeskripsi] = useState(
    localStorage.getItem("deskripsi") || ""
  );
  const [showModal, setShowModal] = useState(false);

  const [newPerusahaan, setNewPerusahaan] = useState("");
  const [newNamaPekerjaan, setNewNamaPekerjaan] = useState("");
  const [newTipe, setNewTipe] = useState("");
  const [newTanggal, setNewTanggal] = useState("");
  const [newDeskripsi, setNewDeskripsi] = useState("");

  useEffect(() => {
    localStorage.setItem("perusahaan", perusahaan);
    localStorage.setItem("namaPekerjaan", namaPekerjaan);
    localStorage.setItem("tipe", tipe);
    localStorage.setItem("tanggal", tanggal);
    localStorage.setItem("deskripsi", deskripsi);
  }, [perusahaan, namaPekerjaan, tipe, tanggal, deskripsi]);

  const updateProfil = () => {
    setShowModal(true);

    setNewPerusahaan(perusahaan);
    setNewNamaPekerjaan(namaPekerjaan);
    setNewTipe(tipe);
    setNewTanggal(tanggal);
    setNewDeskripsi(deskripsi);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (
      newPerusahaan ||
      newNamaPekerjaan ||
      newTipe ||
      newTanggal ||
      newDeskripsi
    ) {
      setNama(`${newPerusahaan}`);
      setUmur(`${newNamaPekerjaan}`);
      setEmail(`${newTipe}`);
      setNomor(`${newTanggal}`);
      setDomisili(`${newDeskripsi}`);

      handleClose();
    }
  };
  return (
    <>
      <div className="row mt-3 shadow rounded p-3 bg-body-secondary">
        <h2 className="fw-semibold">Pengalaman</h2>
        <hr />
        <div className="col">
          <p>
            <strong>{perusahaan}</strong>
          </p>
          <p>{namaPekerjaan}</p>
          <p>{tipe}</p>
          <p>{tanggal}</p>
          <p>{deskripsi}</p>
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
            <Form.Group controlId="forPerusahaan">
              <Form.Label>Perusahaan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: PT Kilang Abadi"
                value={newPerusahaan}
                onChange={(e) => setNewPerusahaan(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forNamaPekerjaan">
              <Form.Label>Nama Pekerjaan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Customer Service, IT Suppport, Senior Manager"
                value={newNamaPekerjaan}
                onChange={(e) => setNewNamaPekerjaan(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forTipe">
              <Form.Label>Tipe Kontrak</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Intership, Magang, Fulltime, Parttime"
                value={newTipe}
                onChange={(e) => setNewTipe(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forTanggal">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Juni 2020 -  Januari 2023/April 2021 - Sekarang"
                value={newTanggal}
                onChange={(e) => setNewTanggal(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forDeskripsi">
              <Form.Label>Deskripsi Pekerjaan</Form.Label>
              <Form.Control
                type="text"
                placeholder=" Contoh: Menjaga dan memelihara hubungan serta ekspektasi pengguna"
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
