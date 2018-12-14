import React, { Component } from 'react';
import Glass from './Glass';
import './App.css';
import GridLayout from 'react-grid-layout';

class App extends React.Component {
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
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
      {i: 'b', x: 1, y: 0, w: 3, h: 4, minW: 2, maxW: 4},
      {i: 'c', x: 4, y: 0, w: 1, h: 2}
    ];
    const {glasses} = this.state;
    console.log({glasses});   

    return (        
      <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key="a"><Glass/></div>
        <div key="b"><Glass/></div>
        <div key="c"><Glass/></div>
      </GridLayout>
    )
  }
}


// class App extends Component {

//   state = {}

//   componentDidMount() {
//     this._getGlasses()
//   }
  
//   _getGlasses = async() => {
//     const glasses = await this._callApi();
//     this.setState({
//       glasses
//     })
//   }

//   _renderGlasses = () => {
//     const glasses = this.state.glasses.map(glass => {
//       return(
//         <Glass
//           name = {glass.name}
//           image = {glass.image}
//           key = {glass.id}
//           category = {glass.category}
//         />)
//       })
//       return glasses;
//   }
//   _callApi = () => {
//     // 무비데이터를 리턴한다
//     return(
//       fetch("https://res.cloudinary.com/dlrv4nsyi/raw/upload/v1544526021/data/json/dataglass.json")
//       .then(response =>response.json())
//       .then(json => json.data.glasses)
//       .catch(err => console.log(err))
//     )
//   }

 

//   render() {
//     const {glasses} = this.state;
//     console.log({glasses});
//     return (
//       <div className={glasses?'app':'app-loading'}>
//         {glasses?this._renderGlasses():'Loading'}
//       </div>
//     );
//   }
// }

export default App;
