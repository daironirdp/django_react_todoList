import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React from "react";

interface navProps {
  logout: () => Promise<void>;
  user: string;
}

export const NavegationBar: React.FC<navProps> = ({ logout, user }) => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{color:'white'}} >Todos App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              {user ? (
                <>
                <Link style={{color:'white'}} to="/todos/" className="nav-link">
                    Todos
                  </Link>
                  <Link style={{color:'white'}}  to="/logout/" onClick={logout} className="nav-link">
                    LogOut
                  </Link>
                  <span style={{color:'white'}} className="nav-link">
                    Welcome <span>{user}</span>{" "}
                  </span>
                </>
              ) : (
                <>
                  <Link style={{color:'white'}} to="/login/" className="nav-link">
                    Login
                  </Link>
                  <Link style={{color:'white'}} to={"/signup/"} className="nav-link">
                    Sign Up
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
