import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';

import Background from './Background';
import PersonalProjects from './PersonalProjects';
import TeamProjects from './TeamProjects';
import Contact from './Contact';

import Graduate from './Graduate';
import Undergrad from './Undergrad';
import Secondary from './Secondary';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='background' element={<Background />} />
          <Route path='personal' element={<PersonalProjects />} />
          <Route path='team' element={<TeamProjects />} />
          <Route path='contact' element={<Contact />} />
          <Route path='graduate' element={<Graduate />} />
          <Route path='undergrad' element={<Undergrad />} />
          <Route path='secondary' element={<Secondary />} />
        </Routes>
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


