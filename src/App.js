import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state={
    lists:{},
    rates:{}
  }


  componentDidMount() {
    axios.get(`https://exchangeratesapi.io/api/latest`)
      .then(res => {
        const lists = res.data;
        const rates = lists.rates;
        const aud = rates["AUD"];
        const aud2 = aud*2;
        this.setState({ aud2 });
        this.setState({ lists });

        console.log({ aud });
        // var row= [];
        for (var key in rates){
          console.log(`${key}, ${rates[key]}`);
          
        }
        // this.setState({rates});
      })
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        
          Australian dollar is = {this.state.aud2}
          {/* {this.state.(`key: ${key}, value: ${rates[key]}`)} */}
          {/* {row} */}
        
        </div>
      </div>
    );
  }
}

export default App;
