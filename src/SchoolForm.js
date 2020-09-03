import React from 'react';

class SchoolForm extends React.Component {
  state={
    grades: "",
    number_classes: 0,
    number_students: 0,
    has_aircon: false,
    username: '',
    password: '',
    registered: false,
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
    if (this.state.username === '' && this.state.password === '') {
      let [username, password] = this.accountGenerator();
      this.setState({
        ...this.state,
        username: username,
        password: password,
        registered: true
      });
    }

    let saveEntry = {...this.state};
    saveEntry["username"] = this.state.username;
    saveEntry["password"] = this.state.password;

    let stateString = JSON.stringify(saveEntry);

    if (localStorage.getItem(this.state.username)===null) {
      localStorage.setItem(this.state.username, stateString);
    } else {
      localStorage[this.state.username] = stateString;
    }

  }

  accountGenerator = () => {
    let charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    let userHash = ''
    for (let i=0, n=charSet.length; i<=8; ++i) {
      password += charSet.charAt(Math.floor(Math.random() * n));
    }
    for (let i=0, n=charSet.length; i<=3; ++i) {
      userHash += charSet.charAt(Math.floor(Math.random() * n));
    }
    let username = 'user' + userHash;
    return [username, password];
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
          <h2>Login</h2>
          <label>Username: </label>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => {
              this.setState({
                ...this.state,
                username: e.target.value
              })
            }}
          /><br/>
          <label>Password: </label>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => {
              this.setState({
                ...this.state,
                password: e.target.value
              })
            }}
          /><br/>
          <hr />

          <h2>Registration Form</h2>
          <label>Grade: </label>
          <input type="text" value={this.state.grades} onChange={this.gradesOnChangeHandler} /><br/>
          <label>Number of Classes: </label>
          <input type="number" value={this.state.number_classes} onChange={this.numberClassesOnChangeHandler} /><br/>
          <label>Number of Students: </label>
          <input type="number" value={this.state.number_students} onChange={this.numberStudentsOnChangeHandler} /><br/>
          <label>Are rooms airconditioned? </label>
          <input type="checkbox" defaultChecked={this.state.has_aircon} onChange={this.hasAirconCheckedHandler} /><br/>
          <input type="submit" value="Submit" />
        </form>
        <h3>Grade: {this.state.grades}</h3>
        <h3>Number of Classes: {this.state.number_classes}</h3>
        <h3>Number of Students: {this.state.number_students}</h3>
        <h3>Has Aircondition: {this.state.has_aircon ? "Yes" : "No"}</h3>
        <p>{this.state.registered ? `Registration completed! Your username is: ${this.state.username} and password: ${this.state.password}` : ''}</p>
      </div>
    );
  }
}

export default SchoolForm;
