import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import GridLayout from 'react-grid-layout';


const Box = (props) => {
  const style = Object.assign({ background: 'silver', border: '1px solid black' }, props.style || {})
  return <div {...props} style={style}  />
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    var layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2 },
      { i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 2, y: 0, w: 1, h: 2 }
    ];
    return (
      <GridLayout 
        className="layout" 
        layout={layout} 
        cols={layout.length}
        rowHeight={30} 
        width={500}
        margin={[1,1]}
        containerPadding={[0,0]}
        >
        <Box key="a">a</Box>
        <Box key="b">b</Box>
        <Box key="c">c</Box>  
        <Box key="d">a</Box>
        <Box key="e">b</Box>
        <Box key="f">c</Box>          
      </GridLayout>
    );
  }
}

render(<App />, document.getElementById('root'));
