import React from 'react'
import Finder from './finderForm'
import Result from './results'

const schools = [
  {
    name: '',
    maxAge: 7,
    needsAircon: true
  },
  {
    name: '',
    maxAge: 9,
    needsAircon: false
  },
  {
    name: '',
    maxAge: 15,
    needsAircon: true
  },
  {
    name: '',
    maxAge: 18,
    needsAircon: false
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
  filterSchools = () => {
    return schools.filter(e => {
      return (this.state.age < e.maxAge && this.state.needsAircon === e.needsAircon)
    })
  }
  render() {
    return (
      <div>
        <Finder
          onFullnameChange={this.handleFullNameChange}
          onAgeChange={this.handleAgeChange}
          onAirconChange={this.handleAirconChange}

          info={this.state} />
        <Result schools={this.filterSchools()} />
      </div>
    )
  }
}
export default Registration;
