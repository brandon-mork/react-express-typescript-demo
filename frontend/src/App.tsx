import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path="/app/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
