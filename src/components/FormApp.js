import React from 'react';

import classes from './FormApp.module.css';

class FormApp extends React.Component {

  backColor = () => {
    console.log(this.props.stage)
    switch(this.props.stage) {
      case "Baby":
        return classes.A;
        break;
      case "Toddler":
        return classes.B;
        break;
      case "Preschool":
        return classes.C;
        break;
      case "Gradeschooler":
        return classes.D;
        break;
      case "Teen":
        return classes.E;
        break;
      case "Young adult":
        return classes.F;
        break;
      default:
        return classes.default;
    }
  }

  render(props) {

    return (
      <div className={this.backColor()}>
         <form>
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <label><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required/><br/>

            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required/><br/>

            <label><b>Repeat Password</b></label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/><br/>

            <button type="submit">Register</button>
        </form> 
      </div>
    )
  }
}

export default FormApp;
