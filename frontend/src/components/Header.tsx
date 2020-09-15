import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Routes from '../constants/routes';

interface HeaderProps extends RouteComponentProps {}
function Header(props: HeaderProps) {
  return (
    <Navbar expand="md">
      <Navbar.Brand href={Routes.Home} className="font-weight-bold">
        <Link to={Routes.Home}>Brandon Mork</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="mx-4" onClick={() => props.history.push(Routes.Home)}>
            Home
          </Nav.Link>
          <Nav.Link className="mx-4" onClick={() => props.history.push(Routes.Login)}>
            Link
          </Nav.Link>
        </Nav>
        <Button variant="outline-dark" className="font-weight-bold" onClick={() => props.history.push(Routes.Login)}>
          Log In
        </Button>
        <Button variant="primary" className="font-weight-bold mx-1" onClick={() => props.history.push(Routes.Login)}>
          Get Started
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
