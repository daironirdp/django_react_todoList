import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const NavegationBar = () => {
  
const user = null;
  

  return (
    <>
        <Navbar bg="primary" variant="dark">
          <div className="container-fluid">
            <Navbar.Brand>TodosApp</Navbar.Brand>
            <Nav className="me-auto">
              <Container>
                <Link className="nav-link" to={"/todos"}>
                  Todos
                </Link>
                
                {user ? (
                  <Link to={"/logout"} className="nav-link">
                    Logout ({user})
                  </Link>
                ) : (
                  <>
                    [DCB3]
                    <Link className="nav-link" to={"/login"}>
                      Login
                    </Link>
                    <Link className="nav-link" to={"/signup"}>
                      Sign Up
                    </Link>
                  </>
                )}

              </Container>
            </Nav>
          </div>
        </Navbar>
    </>
  );
};
