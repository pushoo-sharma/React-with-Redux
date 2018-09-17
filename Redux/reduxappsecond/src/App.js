import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Redux</h1>
        </header>
        <p className="App-intro">
          Welocome to Redux !
        </p>
        <div>
          <div><span>A : </span><span>{this.props.a}</span></div>
          <button onClick={()=> this.props.updateA(this.props.b)}>Update A </button>
        </div>
        <div>
          <div><span>B : </span><span>{this.props.b}</span></div>
          <button onClick={() => this.props.updateB(this.props.a)}>Update B </button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) =>{
  return{
    a : store.rA.a,
    b : store.rB.b,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateA : (b) => dispatch({type : 'updateA',value:b}),
    updateB : (a) => dispatch({type : 'updateB',value:a})
  }
}
export default connect(mapStoreToProps,mapDispatchToProps)(App);
