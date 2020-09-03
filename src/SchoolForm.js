import React from 'react';
import classes from './SchoolForm.module.css';

class SchoolForm extends React.Component {
  state={
    grades: "",
    number_classes: 0,
    number_students: 0,
    has_aircon: false,
    username: '',
    password: '',
    registered: false,
    userNotFoundError: false,
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

  onLoginSubmitHandler = (e) => {
    e.preventDefault();
    let matchedAccount = Object.keys(localStorage).map((key) => {
      let localStorageResult = JSON.parse(localStorage.getItem(key));
      if (localStorageResult.username === this.state.username && localStorageResult.password === this.state.password) {
        return localStorageResult;
      } else {
        return null
      }
    });
    matchedAccount = matchedAccount[0];
    if (matchedAccount !== null) {
      this.setState({
        ...this.state,
        grades: matchedAccount.grades,
        number_classes: matchedAccount.number_classes,
        number_students: matchedAccount.number_students,
        has_aircon: matchedAccount.has_aircon,
        userNotFoundError: false
      });
    } else {
      this.setState({
        ...this.state,
        grades: "",
        number_classes: 0,
        number_students: 0,
        has_aircon: false,
        userNotFoundError: true
      });
    }
  }

  onRegisterSubmitHandler = (e) => {
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    let registered = false
    if (this.state.username === '' && this.state.password === '') {
      [username, password] = this.accountGenerator();
      registered = true
    }

    let saveEntry = {...this.state};
    saveEntry["username"] = username;
    saveEntry["password"] = password;

    this.setState({
      ...this.state,
      username: username,
      password: password,
      registered: registered
    });

    let stateString = JSON.stringify(saveEntry);
    if (localStorage.getItem(username)===null) {
      localStorage.setItem(username, stateString);
    } else {
      localStorage[username] = stateString;
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
    let username = 'user_' + userHash;
    return [username, password];
  }

  onDeleteHandler = (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete your account?")) {
      if (this.state.username !== "" && this.state.password !== "") {
        // ;
        if (localStorage.getItem(this.state.username)!==null) {
          let selectedAccount = JSON.parse(localStorage.getItem(this.state.username));
          if (selectedAccount['username'] === this.state.username && selectedAccount['password'] === this.state.password) {
            localStorage.removeItem(this.state.username);
            alert('Account deleted successfully.');
            this.setState({
              ...this.state,
              grades: "",
              number_classes: 0,
              number_students: 0,
              has_aircon: false,
              username: "",
              password: ""
            });
          }
        } else {
          alert('No account matched.');
        }
      }
    }
  }

  // componentDidMount = () => {
  //   let localStorageState = JSON.parse(localStorage.getItem('state'));
  //   console.log(localStorageState);
  //   this.setState({
  //     ...this.state,
  //     ...localStorageState
  //   })
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.onLoginSubmitHandler}>
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
          />
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
          />
          <input type="submit" value="Login" className={classes.green} />
          {this.state.userNotFoundError ? <p className={classes.errorLabel}>User not found.</p> : ''}
        </form>
        <hr />
        <form onSubmit={this.onRegisterSubmitHandler}>
          <h2>Registration Form</h2>
          <label>Grade: </label>
          <input type="text" value={this.state.grades} onChange={this.gradesOnChangeHandler} />
          <label>Number of Classes: </label>
          <input type="number" value={this.state.number_classes} onChange={this.numberClassesOnChangeHandler} />
          <label>Number of Students: </label>
          <input type="number" value={this.state.number_students} onChange={this.numberStudentsOnChangeHandler} />
          <label>Are rooms airconditioned? </label>
          <input type="checkbox" defaultChecked={this.state.has_aircon} onChange={this.hasAirconCheckedHandler} />
          <input type="submit" value="Submit" className={classes.blue} />
        </form>
        <hr />
        <h2>Output</h2>
        <h3>Grade: {this.state.grades}</h3>
        <h3>Number of Classes: {this.state.number_classes}</h3>
        <h3>Number of Students: {this.state.number_students}</h3>
        <h3>Has Aircondition: {this.state.has_aircon ? "Yes" : "No"}</h3>
        <p>{this.state.registered ? `Registration completed! Your username is: ${this.state.username} and password: ${this.state.password}` : ''}</p>
        <button className={classes.red} onClick={this.onDeleteHandler}>Delete Account</button>
      </div>
    );
  }
}

export default SchoolForm;
