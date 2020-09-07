import React from 'react';

import classes from './CountryDetails.module.css';

class CountryDetails extends React.Component {
  state = {
    results: []
  }

  getCallingCode = () => {
    const requestOptions = {
      method: 'GET'
    };
    fetch(`https://restcountries.eu/rest/v2/callingcode/${this.props.callingCodes[0]}`, requestOptions)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          results: result
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    );
    // this.props.callingCodes
  }

  componentWillMount = async () => {
    await this.getCallingCode();
  }

  render(props) {
    return(
      <div className={classes.div}>
        {this.state.results[0] !== undefined ? this.state.results[0].region : ""}
      </div>
    )
  }
}

export default CountryDetails;
