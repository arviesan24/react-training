import React from 'react';

class FormExercise extends React.Component {
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
      </div>
    );
  }
}

export default FormExercise;
