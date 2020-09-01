import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';

import InputBox from './components/InputBox';
import FormApp from './components/FormApp';
import Home from './components/Home';

class StageIdentifier extends Component {
  state = {
    stage: "",
    months: 0,
    years: 0
  }

  counter = (months, years) => {
    if (months < 12 && years === 0) {
      this.setState({
        ...this.state,
        stage: "Baby"
      })
    } else if (years >= 1 && years <= 3) {
      this.setState({
        ...this.state,
        stage: "Toddler"
      })
    } else if (years > 3 && years <= 5) {
      this.setState({
        ...this.state,
        stage: "Preschool"
      })
    } else if (years > 5 && years <= 12) {
      this.setState({
        ...this.state,
        stage: "Gradeschooler"
      })
    } else if (years > 12 && years <= 18) {
      this.setState({
        ...this.state,
        stage: "Teen"
      })
    } else if (years > 18 && years <= 21) {
      this.setState({
        ...this.state,
        stage: "Young adult"
      })
    }
  }

  componentDidMount() {
    this.counter(this.state.months, this.state.years);
  }

  onMonthChangeHandler = (e) => {
    this.setState({
      ...this.state,
      months: e.target.value
    })
    // }, () => this.counter(this.state.months, this.state.years))
  }

  onYearChangeHandler = (e) => {
    this.setState({
      ...this.state,
      years: e.target.value
    })
    // }, () => this.counter(this.state.months, this.state.years))
  }

  onButtonClickHandler = () => {
    this.counter(this.state.months, this.state.years);
  }

  render() {

    return (
      <BrowserRouter>
        <div>
          <InputBox label="Months" value={this.state.months} onChangeHandler={this.onMonthChangeHandler} />
          <InputBox label="Years" value={this.state.years} onChangeHandler={this.onYearChangeHandler} />
          <h1>You are a {this.state.stage}</h1>
          <NavLink to={`/form/${this.state.stage}`} onClick={() => this.onButtonClickHandler()}>Submit</NavLink>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/form/:stage" exact>
              {this.state.stage==='Baby' || this.state.stage==='Toddler' || this.state.stage==='Preschool' ?
                <Redirect to="/" /> :
                () => (<FormApp stage={this.state.stage}/>)}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default StageIdentifier;
