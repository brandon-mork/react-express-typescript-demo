import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="login-block">
      <div className="login-header">Welcome</div>

      <div>
        Would you like to <Link to="/app/login">log in</Link>?
      </div>
    </div>
  );
}

export default Home;
