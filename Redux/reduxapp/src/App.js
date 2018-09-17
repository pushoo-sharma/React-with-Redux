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
          Welcome to Redux !
        </p>
        <h2>Age <span>{this.props.age}</span> </h2>
        <button onClick={this.props.onAgeUp}>Age Up</button>

        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr/>
        <div>
          <ul>
            <ul>
              {
                this.props.history.map(el => (
                  <li key ={el.id} onClick={() => this.props.onDelItem(el.id)}>
                    {el.age}
                  </li>
              ))
              }
            </ul>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    age : state.age,
    history : state.history,
  };
};
const mapDispatchToProps = (dispatch) =>{
  return{
    onAgeUp : () => dispatch({type : 'AGE_UP',value : 1}),
    onAgeDown : () => dispatch({type : 'AGE_DOWN',value : 1}),
    onDelItem : (id) => dispatch({type : 'AGE_DELETE',key : id}),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(App);

