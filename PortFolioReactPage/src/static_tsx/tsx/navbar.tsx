import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../css/navbar.css";
import Signature from "../../Signature.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar variant="dark" className="navbar" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand>
            <img src={Signature} alt="logo" width={"150px"} height={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-element nav-link">About me</Link>
            <Link to="/portfolio" className="nav-element nav-link">Portfolio</Link>
            <Link to="/testimonials" className="nav-element nav-link" >Testimonials</Link>
            <Link to="/experiences" className="nav-element nav-link" >My Experiences</Link>
            <Link to="/contact" className="nav-element nav-link">Contact me!</Link>
  

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
