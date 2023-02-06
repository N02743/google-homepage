import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "@mui/material/Button"
import AppsIcon from '@mui/icons-material/Apps';
import IconButton from '@mui/material/IconButton';

function TopNavBar() {
  return (
    <>
      <Navbar id="header">
        <Container>
          <Nav>
            <Nav.Link className="navlinktop">Gmail</Nav.Link>
            <Nav.Link className="navlinktop">Images</Nav.Link>
            <IconButton sx={{paddingRight: "15px"}}>
              <AppsIcon />
            </IconButton>
            <Button variant="contained" sx={{textTransform: 'none'}}>Sign in</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNavBar;
