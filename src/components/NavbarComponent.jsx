import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [changeColor, setCahngeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setCahngeColor(true);
    } else {
      setCahngeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container className="py-2">
          <Navbar.Brand href="/" className="fw-bold fs-3">
            {" "}
            JOB<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center">
            <Nav className="mx-auto gap-3">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/findjobs">Lowongan</Nav.Link>
              <Nav.Link href="/myjob">Lamaran saya</Nav.Link>
              <Nav.Link href="/service">Fitur</Nav.Link>
            </Nav>
            <Link
              to="/signup"
              className="btn btn-light btn-outline-warning ms-3"
            >
              Masuk
            </Link>
            <Button className="btn btn-warning fw-semibold ms-3">
              Untuk perusahaan
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
