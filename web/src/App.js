import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Example, {exampleReducer} from './Example';
import logo from './logo.svg';
import './App.css';

const store = createStore(combineReducers({
  example: exampleReducer
}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <div className="App-intro">
            <Example />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
