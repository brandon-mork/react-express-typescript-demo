import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Routes from '../constants/routes';

interface HeaderProps extends RouteComponentProps {}
function Header(props: HeaderProps) {
  return (
    <Navbar expand="md" className="mx-4 mt-2">
      <Navbar.Brand href={Routes.Home} className="font-weight-bold">
        <Link to={Routes.Home} className="text-uppercase">
          Brandon Mork
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="header-navbar" />
      <Navbar.Collapse id="header-navbar">
        <Nav className="ml-auto">
          <Nav.Link className="text-uppercase" onClick={() => props.history.push(Routes.Home)}>
            Home
          </Nav.Link>
          <Nav.Link className="text-uppercase mx-5" onClick={() => props.history.push(Routes.Resume)}>
            Resume
          </Nav.Link>
        </Nav>
        <Button variant="outline-dark" className="text-uppercase font-weight-bold" onClick={() => props.history.push(Routes.Login)}>
          Demo
        </Button>
        <Button variant="primary" className="text-uppercase font-weight-bold mx-1" onClick={() => props.history.push(Routes.Login)}>
          Get In Touch
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
