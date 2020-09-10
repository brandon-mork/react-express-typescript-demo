import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Summary from './components/Summary';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Routes from './constants/routes';

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route path={Routes.Login} component={Login} />
          <Route path={Routes.Summary} component={Summary} />
          <Route path={Routes.Home} component={Home} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
