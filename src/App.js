import React, { Component } from 'react';
import Glass from './Glass';
import './App.css';

class App extends Component {

  state = {}

  componentDidMount() {
    this._getGlasses()
  }
  
  _getGlasses = async() => {
    const glasses = await this._callApi();
    this.setState({
      glasses
    })
  }

  _renderGlasses = () => {
    const glasses = this.state.glasses.map(glass => {
      return(
        <Glass
          name = {glass.name}
          image = {glass.image}
          key = {glass.id}
          category = {glass.category}
        />)
      })
      return glasses;
  }
  _callApi = () => {
    // 무비데이터를 리턴한다
    return(
      fetch("https://res.cloudinary.com/dlrv4nsyi/raw/upload/v1544526021/data/json/dataglass.json")
      .then(response =>response.json())
      .then(json => json.data.glasses)
      .catch(err => console.log(err))
    )
  }

 

  render() {
    const {glasses} = this.state;
    console.log({glasses});
    return (
      <div className={glasses?'app':'app-loading'}>
        {glasses?this._renderGlasses():'Loading'}
      </div>
    );
  }
}

export default App;
