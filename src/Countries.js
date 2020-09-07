import React from 'react';

import CountryDetails from './CountryDetails';

class Countries extends React.Component {

  state = {
    items: [],
    isLoaded: false
  }
  getAllCountries = () => {
    const requestOptions = {
      method: 'GET'
    };

    fetch('http://restcountries.eu/rest/v2/all', requestOptions)
    .then(res => res.json())
    .then(
      // Add displayItem key to every object of the result list to use as identifier when to display
      // the details or not.
      (result) => {
        result.map((res) => {
          res.displayItem = false;
          return res;
        });
        this.setState({
          items: result
        });
      },
      (error) => {
        this.setState({
          error
        });
      }
    );
  }

  componentDidMount  = async () => {
    await this.getAllCountries();
  }

  showCountryDetails = (e) => {
    e.preventDefault();
  }

  displayDetailsHandler = (alpha3Code) => {
    // Deep copy state items. ES6 way.
    let cloneItems = [
      ...this.state.items
    ].map(i => ({ ...i}));

    cloneItems.map((item) => {
      if (item.alpha3Code === alpha3Code) {
        item.displayItem = !item.displayItem
        
      }
      return item
    });
    this.setState({
      ...this.state,
      items: cloneItems
    });
    // console.log(cloneItems)
  }

  render() {
     const allCountries = this.state.items.map(entry => 
        {
          let countryDetails = entry.displayItem ? <CountryDetails callingCodes={entry.callingCodes} /> : '';
          return <li key={entry.alpha3Code}>
            <label onClick={() => this.displayDetailsHandler(entry.alpha3Code)}>
              {entry ? entry.name: "No Data Available"}
            </label>
            {countryDetails}
          </li>
        }
      )
    return (
      <ul>
        {allCountries}
      </ul>
    );
  }
}

export default Countries;
