import React from 'react';

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
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  componentWillMount = async () => {
    await this.getAllCountries();
  }

  render() {
     const allCountries = this.state.items.map(entry => 
        <li key={entry.alpha3Code}>
          {entry ? entry.name: "No Data Available"}
        </li>
      )
    return (
      <ul>
        {allCountries}
      </ul>
    );
  }
}

export default Countries;
