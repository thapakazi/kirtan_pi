import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
     this.state= {
       txt: "hare raam hare hare",
    };
  }
  update(e){
    this.setState({
      txt: e.target.value
    });    
  }
  componentWillMount(){
    console.log("componentWillMount")
  }
  render(){
    console.log("render")
    return(
    <div className="App">
      <input type="text" onChange={this.update.bind(this)}/>
      <h1>{this.state.txt}</h1>

      
    </div>
    );
  };
  componentDidMount(){
    console.log("component did mount")
  }
}

export default App;
