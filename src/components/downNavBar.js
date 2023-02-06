import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function DownNavBar() {
  return (
    <>
      <Navbar id="footer">
        <Container>
          <Nav className="footer-left">
            <Nav.Link className="navlinkdown">About</Nav.Link>
            <Nav.Link className="navlinkdown">Advertising</Nav.Link>
            <Nav.Link className="navlinkdown">Business</Nav.Link>
            <Nav.Link className="navlinkdown">How Search works</Nav.Link>
          </Nav>

          <Nav className="footer-right">
            <Nav.Link className="navlinkdown">Privacy</Nav.Link>
            <Nav.Link className="navlinkdown">Terms</Nav.Link>
            <Nav.Link className="navlinkdown">Settings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default DownNavBar;
