import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route path="/app/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
