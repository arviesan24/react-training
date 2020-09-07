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
    let details = null
    const detailsToDisplayArray = ['region', 'alpha3Code', 'capital', 'subregion']

    details = detailsToDisplayArray.map(detailToDisplay => {
    return  <p>{this.state.results[0] !== undefined ? `${detailToDisplay}: ${this.state.results[0][detailToDisplay]}` : ""}</p>;
    });

    return(
      <div className={classes.div}>
        {details}
      </div>
    )
  }
}

export default CountryDetails;
