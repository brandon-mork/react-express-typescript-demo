import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Summary from './components/Summary';
import Resume from './components/Resume';
import { Switch, Route } from 'react-router-dom';
import Routes from './constants/routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={Routes.Login} component={Login} />
        <Route path={Routes.Summary} component={Summary} />
        <Route path={Routes.Resume} component={Resume} />
        <Route path={Routes.Home} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
