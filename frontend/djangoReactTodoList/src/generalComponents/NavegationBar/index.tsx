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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Users API Client Side</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user ? (
                <>
                <Link to="/todos/" className="nav-link">
                    Todos
                  </Link>
                  <Link to="/logout/" onClick={logout} className="nav-link">
                    LogOut
                  </Link>
                  <span className="nav-link">
                    Welcome <span>{user}</span>{" "}
                  </span>
                </>
              ) : (
                <>
                  <Link to="/login/" className="nav-link">
                    Login
                  </Link>
                  <Link to={"/signup/"} className="nav-link">
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
