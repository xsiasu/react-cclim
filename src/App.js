import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {}

  componentDidMount() {
    this._getMovies()
  }
  
  _callApi = () => {
    return(
      fetch("https://res.cloudinary.com/dlrv4nsyi/raw/upload/v1544429554/data/json/products.json")
      .then(response => response.json())
      .then(json => console.log(json))
      .then(err => {
        console.log(err)
      })

    )

  }

  _getMovies = async() => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          


        </header>
      </div>
    );
  }
}

export default App;
