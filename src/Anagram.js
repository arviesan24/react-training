import React from 'react';

import styles from './Anagram.sass';

class Anagram extends React.Component {
  state = {
    first: "",
    second: "",
    anagram: false,
  }

  anagramChecker = (e) => {
    e.preventDefault();
    let first = "";
    let second = "";
    first = this.state.first.split('').sort();
    second = this.state.second.split('').sort();

    if (first.join('')===second.join('')) {
      this.setState({
        ...this.state,
        anagram: true
      })
    } else {
      this.setState({
        ...this.state,
        anagram: false
      })
    }
  }

  firstHandler = (e) => {
    this.setState({
      ...this.state,
      first: e.target.value
    });
  }
  secondHandler = (e) => {
    this.setState({
      ...this.state,
      second: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.first} onChange={this.firstHandler} />
        <input type="text" value={this.state.second} onChange={this.secondHandler} />
        <button className="button" onClick={this.anagramChecker}>Button</button>

        <p>{this.state.anagram ? "Anagram" : "Not anagram"}</p>
      </div>
    );
  }
}


export default Anagram;
