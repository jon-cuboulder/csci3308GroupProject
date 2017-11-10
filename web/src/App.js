import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


import searchReducer from './reducers/search';
import Home from './containers/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';

const store = createStore(combineReducers({
  search: searchReducer
}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <div className="container-fluid">
              <Route exact path="/" component={Home} />
              <Route path="/register" component={Register} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
