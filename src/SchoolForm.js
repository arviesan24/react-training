import React from 'react';

class SchoolForm extends React.Component {
  state={
    grades: "",
    number_classes: 0,
    number_students: 0,
    has_aircon: false
  }

  gradesOnChangeHandler = (e) => {
    this.setState({
      ...this.state,
      grades: e.target.value
    })
  }

  numberClassesOnChangeHandler = (e) => {
    this.setState({
      ...this.state,
      number_classes: e.target.value
    })
  }

  numberStudentsOnChangeHandler = (e) => {
    this.setState({
      ...this.state,
      number_students: e.target.value
    })
  }

  hasAirconCheckedHandler = (e) => {
    this.setState({
      ...this.state,
      has_aircon: e.target.checked
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    let stateString = JSON.stringify(this.state);
    if (localStorage.getItem('state')===null) {
      localStorage.setItem('state', stateString);
    } else {
      localStorage["state"] = stateString;
    }
    
  }

  randomPasswordGenerator = () => {
    let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i=0, n=charSet.length; i<=8; ++i) {
      password += charSet.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }

  componentDidMount = () => {
    let localStorageState = JSON.parse(localStorage.getItem('state'));
    console.log(localStorageState);
    this.setState({
      ...this.state,
      ...localStorageState
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" value={this.state.grades} onChange={this.gradesOnChangeHandler} />
          <input type="number" value={this.state.number_classes} onChange={this.numberClassesOnChangeHandler} />
          <input type="number" value={this.state.number_students} onChange={this.numberStudentsOnChangeHandler} />
          <input type="checkbox" defaultChecked={this.state.has_aircon} onChange={this.hasAirconCheckedHandler} />
          <input type="submit" value="Submit" />
        </form>
        <h3>Grade: {this.state.grades}</h3>
        <h3>Number of Classes: {this.state.number_classes}</h3>
        <h3>Number of Students: {this.state.number_students}</h3>
        <h3>Has Aircondition: {this.state.has_aircon ? "Yes" : "No"}</h3>
      </div>
    );
  }
}

export default SchoolForm;
