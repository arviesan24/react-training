import React from 'react';

class Randomizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.randomGenerator(), 1000);
  }

  randomGenerator = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 4000)
    })
    
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>{this.state.randomNumber}</h1>
      </div>
    )
  }
}

export default Randomizer;
