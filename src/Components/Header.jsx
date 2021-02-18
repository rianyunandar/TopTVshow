import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href=""> TV Show Apps </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav> 
      <Nav.Link >Home</Nav.Link>
      <Nav.Link >Show</Nav.Link>
      <Nav.Link >Login</Nav.Link>
      <Nav.Link >Logout</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
