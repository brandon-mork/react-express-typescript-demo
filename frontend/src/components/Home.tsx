import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Routes from '../constants/routes';
import Header from './Header';

function Home() {
  return (
    <div>
      <Header></Header>
      <Container>
        <div>
          Would you like to <Link to={Routes.Login}>log in</Link>?
        </div>
      </Container>
    </div>
  );
}

export default Home;
