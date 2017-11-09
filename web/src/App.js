import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import searchReducer from './reducers/search';
import Home from './containers/Home';

const store = createStore(combineReducers({
  search: searchReducer
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
