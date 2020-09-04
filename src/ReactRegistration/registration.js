import React from 'react'
import Finder from './finderForm'
import Result from './results'

const schools = [
  {
    name: 'Harvard',
    maxAge: 7,
    needsAircon: true,
    parentControl: false
  },
  {
    name: 'Merriam',
    maxAge: 9,
    needsAircon: false,
    parentControl: true
  },
  {
    name: 'St. Augustine',
    maxAge: 15,
    needsAircon: true,
    parentControl: true
  },
  {
    name: 'Ateneo',
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
      fullName: 'Romel',
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
