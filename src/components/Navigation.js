import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
// import Dropdown from 'react-bootstrap/Dropdown';
import '../style/Navigation.css';

// function Navigation() {
//     return (
//         <Dropdown class='dropdown' style={{ float: 'right', paddingRight: '40px' }}>
//             <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
//                 Navigation
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//                 <Dropdown.Item as={Link} to="/">About Me</Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/portfolio">Portfolio</Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
//                 <Dropdown.Item as={Link} to="/resume">Resume</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//     )
// };

// Navigation component
function Navigation() {
    return (
      // Bootstrap Navbar
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top' className='py-0.5 mt-0'>
        <Container>
            <Navbar.Brand as={Link} to='/'>Jon Parker</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/about' className='fs-5 nav-link-highlight shadow-lg'>About Me</Nav.Link>
                <Nav.Link as={Link} to='/portfolio' className='fs-5 nav-link-highlight shadow-lg'>Portfolio</Nav.Link>
                <Nav.Link as={Link} to='/contact' className='fs-5 nav-link-highlight shadow-lg'>Contact</Nav.Link>
                <Nav.Link as={Link} to='/resume' className='fs-5 nav-link-highlight shadow-lg'>Resume</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };

export default Navigation;