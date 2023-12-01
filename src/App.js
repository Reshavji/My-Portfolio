import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import Animation from "../src/Components/Animation/Animation"
function App() {

  return (
    <div className="app"><Animation />
      <div className="app__container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />

        </Switch>
      </div>
    </div>
  );
}

export default App;
