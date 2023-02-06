import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import 'bootstrap/dist/css/bootstrap.css';

function DownNavBar2() {
  return (
    <>
      <Navbar id="footer">
        <Container>
          <Nav className="footer-left">
            <Nav.Link className="navlink">About</Nav.Link>
            <Nav.Link className="navlink">Advertising</Nav.Link>
            <Nav.Link className="navlink">Business</Nav.Link>
            <Nav.Link className="navlink">How Search works</Nav.Link>
          </Nav>

          <Nav className="footer-right">
            <Nav.Link className="navlink">Privacy</Nav.Link>
            <Nav.Link className="navlink">Terms</Nav.Link>
            <Nav.Link className="navlink">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DownNavBar2;
