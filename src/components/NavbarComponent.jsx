import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-bod-light shadow-sm">
        <Container className="py-2">
          <Navbar.Brand href="/" className="fw-bold fs-3">
            {" "}
            JOB.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center">
            <Nav className="mx-auto gap-3">
              <Nav.Link href="/findjobs">Lowongan</Nav.Link>
              <Nav.Link href="/myjob">My JOBS</Nav.Link>
              <Nav.Link href="/companyprofile">Profil Perusahaan </Nav.Link>
              <Nav.Link href="/tipskarir">Tips Karir</Nav.Link>
            </Nav>
            <Link
              to="/signup"
              className="btn btn-light btn-outline-primary ms-3"
            >
              Masuk
            </Link>
            <Button className="btn btn-primary ms-3">Untuk perusahaan</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
