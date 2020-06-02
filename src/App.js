import React from 'react';
// import Cards from './components/Cards'
// import Chart from './components/Chart'
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchAmountData } from './api' //immediatelly search for index.js

class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() { //special  for componentDidMount
    //usually func async ()
    const fetchedData = await fetchAmountData();
    console.log(fetchedData);
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchAmountData(country);
    this.setState({ data: fetchedData, country: country })
    console.log(fetchedData)
    //fetchData, setState
  }

  render() {
    console.log("APP");
    const { data, country } = this.state; //destructuring

    return (
      <div className={styles.container}>
        <h1>COVID-19 Tracker</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

      </div>
    )
  }
}

export default App;

