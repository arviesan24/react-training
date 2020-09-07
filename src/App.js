import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './App.css';

import StageIdentifier from './StageIdentifier';
import Randomizer from './Randomizer';
import Anagram from './Anagram';
import SchoolForm from './SchoolForm';
import Registration from './ReactRegistration/registration';
import Countries from './Countries';
import RoutesExercise from './RoutesExercise';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <header>
            <ul>
              <li><Link to="/" name="Home">Home</Link></li>
              <li><Link to="/countries" name="Countries">Countries</Link></li>
              <li><Link to="/stage" name="Stage">Stage Identifier</Link></li>
              <li><Link to="/randomizer" name="Randomizer">Randomizer</Link></li>
              <li><Link to="/anagram" name="Anagram">Anagram</Link></li>
              <li><Link to="/school" name="School">School Form</Link></li>
              <li><Link to="/registration" name="Registration">Registration Form</Link></li>
            </ul>
          </header>
          <Switch>
            <Route path="/" component={RoutesExercise} exact></Route>
            <Route path="/countries" component={Countries}></Route>
            <Route path="/stage" component={StageIdentifier}></Route>
            <Route path="/randomizer" component={Randomizer}></Route>
            <Route path="/anagram" component={Anagram}></Route>
            <Route path="/school" component={SchoolForm}></Route>
            <Route path="/registration" component={Registration}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
