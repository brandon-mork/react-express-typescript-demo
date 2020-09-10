import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../constants/routes';

function Home() {
  return (
    <div className="home-block">
      <div className="home-header">Welcome</div>

      <div>
        Would you like to <Link to={Routes.Login}>log in</Link>?
      </div>
    </div>
  );
}

export default Home;
