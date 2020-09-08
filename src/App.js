import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import './App.css';

import StageIdentifier from './StageIdentifier';
import Randomizer from './Randomizer';
import Anagram from './Anagram';
import SchoolForm from './SchoolForm';
import Registration from './ReactRegistration/registration';
import Countries from './Countries';
import Home from './Home';
import NewRecord from './RouterExercise/NewRecord';
import Step1 from './RouterExercise/Step1';
import Step2 from './RouterExercise/Step2';
import Step3 from './RouterExercise/Step3';

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
              <li><Link to="/new_record" name="New Record">New Record</Link></li>
            </ul>
          </header>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/countries" component={Countries}></Route>
            <Route path="/stage" component={StageIdentifier}></Route>
            <Route path="/randomizer" component={Randomizer}></Route>
            <Route path="/anagram" component={Anagram}></Route>
            <Route path="/school" component={SchoolForm}></Route>
            <Route path="/registration" component={Registration}></Route>
            <NewRecord>
              <Route component={({match}) => 
                <div>
                  <Route path='/new_record/step1' component={Step1} />
                  <Route path='/new_record/step2' component={Step2} />
                  <Route path='/new_record/step3' component={Step3} />
                </div>
              } />
            </NewRecord>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
