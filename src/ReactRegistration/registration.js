import React from 'react'
import Finder from './finderForm'
import Result from './results'

const schools = [
  {
    name: '',
    maxAge: 7,
    needsAircon: true,
    parentControl: false
  },
  {
    name: '',
    maxAge: 9,
    needsAircon: false,
    parentControl: true
  },
  {
    name: '',
    maxAge: 15,
    needsAircon: true,
    parentControl: true
  },
  {
    name: '',
    maxAge: 18,
    needsAircon: false,
    parentControl: true
  },

]

class Registration extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: 0,
      needsAircon: true,
      fullName: 'Enter your name Fulname + lastname',
      parentControl: false
    }
  }
  handleFullNameChange = (e) => {
    this.setState({ fullName: e })
  }

  handleAgeChange = (e) => {
    this.setState({ age: e })
  }

  handleAirconChange = (e) => {
    this.setState({ needsAircon: e })
  }

  handleParentControlChange = (e) => {
    this.setState({ parentControl: e })
  }

  filterSchools = () => {
    return schools.filter(e => {
      return (
          this.state.age < e.maxAge &&
          this.state.needsAircon === e.needsAircon &&
          this.state.parentControl === e.parentControl
        )
    })
  }
  render() {
    return (
      <div>
        <Finder
          onFullnameChange={this.handleFullNameChange}
          onAgeChange={this.handleAgeChange}
          onAirconChange={this.handleAirconChange}
          onParentControlChange={this.handleParentControlChange}

          info={this.state} />
        <Result schools={this.filterSchools()} />
      </div>
    )
  }
}
export default Registration;
