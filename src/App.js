import React, {Component} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './routes/home';

import Chat from './routes/chat';
import InfoSection from './routes/dashboard/InfoSection/index';

import {generarUUID} from './tools/generador-uuid';

class App extends Component {

  constructor() {
    super();
    this.state = {
      uniqueId: generarUUID()
    };
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <InfoSection/>
            </Route>
            <Route path="/chat/:id" component={Chat}>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;