import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="background">Background</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="personal">Personal Projects</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="team">Team Projects</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="contact">Contact Me</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Education" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="graduate">Graduate</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="undergrad">Undergraduate</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="secondary">Secondary</NavDropdown.Item>
              </NavDropdown>
              <LinkContainer to="work">
                <Nav.Link>Work</Nav.Link>
              </LinkContainer>
              <LinkContainer to="hobbies">
                <Nav.Link>Hobbies and Interests</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}


