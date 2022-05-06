import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = (props) => {

  const { backgroundLabel } = props;
  const { personalLabel } = props;
  const { teamLabel } = props;
  const { contactLabel } = props;
  const { graduateLabel } = props;
  const { undergradLabel } = props;
  const { secondaryLabel } = props;
  const { workLabel } = props;
  const { hobbiesLabel } = props;
  const { homeLabel } = props;

  return (
    <div>
      <Navbar bg="light" expand="lg">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="home">
              <Nav.Link>{homeLabel}</Nav.Link>
            </LinkContainer>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="background">{backgroundLabel}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="personal">{personalLabel}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="team">{teamLabel}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="contact">{contactLabel}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="graduate">{graduateLabel}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="undergrad">{undergradLabel}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="secondary">{secondaryLabel}</NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="work">
              <Nav.Link>{workLabel}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="hobbies">
              <Nav.Link>{hobbiesLabel}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;

