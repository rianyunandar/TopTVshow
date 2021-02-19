import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();

  const { user } = useAuth0();
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <LinkContainer to="/">
          <Navbar.Brand href=""> TV Show Apps </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {" "}
            {isAuthenticated ? <Nav.Link>{user.name}</Nav.Link> : <span></span>}
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/shows">
              <Nav.Link>Show</Nav.Link>
            </LinkContainer>
            {isAuthenticated ? (
              <Nav.Link
                onClick={() =>
                  logout({
                    returnTo: window.location.origin
                  })
                }
              >
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={() => loginWithRedirect()}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
