import React, { useState } from "react";
import { Card, Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Cart from "./Cart";
const NavBar = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar bg="danger" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i class="fa-solid fa-dumpster-fire"></i> E-commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">
                <i className="fa-regular fa-user fa-lg "></i>
              </Nav.Link>
              <Nav.Link as={Link} to="/purchases">
                <i className="fa-solid fa-box-archive fa-lg"></i>
              </Nav.Link>
              <Nav.Link onClick={handleShow}>
                <i className="fa-solid fa-cart-shopping fa-lg"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose} />
    </div>
  );
};

export default NavBar;
