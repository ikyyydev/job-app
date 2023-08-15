import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export const Education = () => {
  const [namaSekolah, setNamaSekolah] = useState(
    localStorage.getItem("namaSekolah") || ""
  );
  const [jurusan, setJurusan] = useState(localStorage.getItem("jurusan") || "");
  const [tahun, setTahun] = useState(localStorage.getItem("tahun") || "");
  const [organisasi, setOraganisasi] = useState(
    localStorage.getItem("organisasi") || ""
  );

  const [showModal, setShowModal] = useState(false);

  const [newNamaSekolah, setNewNamaSekolah] = useState("");
  const [newJurusan, setNewJurusan] = useState("");
  const [newTahun, setNewTahun] = useState("");
  const [newOrganisasi, setNewOrganisasi] = useState("");

  useEffect(() => {
    localStorage.setItem("namaSekolah", namaSekolah);
    localStorage.setItem("jurusan", jurusan);
    localStorage.setItem("tahun", tahun);
    localStorage.setItem("organisasi", organisasi);
  }, [namaSekolah, jurusan, tahun, organisasi]);

  const updateProfil = () => {
    setShowModal(true);

    setNamaSekolah(namaSekolah);
    setNewJurusan(jurusan);
    setNewTahun(tahun);
    setNewOrganisasi(organisasi);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSave = () => {
    if (newNamaSekolah || newJurusan || newTahun || newOrganisasi) {
      setNamaSekolah(`${newNamaSekolah}`);
      setJurusan(`${newJurusan}`);
      setTahun(`${newTahun}`);
      setOraganisasi(`${newOrganisasi}`);
      handleClose();
    }
  };
  return (
    <>
      <div className="row mt-3 shadow rounded p-3 bg-body-secondary">
        <h2 className="fw-semibold">Pendidikan</h2>
        <hr />
        <div className="col">
          <p>
            <strong>{namaSekolah}</strong>
          </p>
          <p>
            <i>{jurusan}</i>
          </p>
          <p>{tahun}</p>
          <p>{organisasi}</p>
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
          <Form className="gap-3">
            <Form.Group controlId="forNamaSekolah">
              <Form.Label>Nama Sekolah</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: SMKN 1 Slawi"
                value={newNamaSekolah}
                onChange={(e) => setNewNamaSekolah(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forJurusan">
              <Form.Label>Jurusan</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Teknik Komputer dan Jaringan"
                value={newJurusan}
                onChange={(e) => setNewJurusan(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forTahun">
              <Form.Label>Tahun</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Juni 2011 - April 2014"
                value={newTahun}
                onChange={(e) => setNewTahun(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="forOrganisasi">
              <Form.Label>Organisasi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Contoh: Mengelola Online shop untuk mendapatkan uang saku ekstra"
                value={newOrganisasi}
                onChange={(e) => setNewOrganisasi(e.target.value)}
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
