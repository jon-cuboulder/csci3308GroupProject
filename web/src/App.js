import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import {exampleReducer} from './Example';

import Home from './components/Home';

const store = createStore(combineReducers({
  example: exampleReducer
}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
