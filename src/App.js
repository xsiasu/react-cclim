import React, { Component } from 'react';
import Movies from './Movie';
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

  _renderMovies = () => {
    const movies = this.state.movies.map(
      movie => {
        return(
          <Movies 
            name = {movie.name}
            image = {movie.image}
            key = {movie.id}
            category = {movie.category}
          />
        )
      }
    )
  }

  render() {
    const {movies} = this.state;
    console.log(movies)
    return (
      <div className={movies?'app':'app-loading'}>
        {movies?this._renderMovies():'Loading'}
      </div>
    );
  }
}

export default App;
