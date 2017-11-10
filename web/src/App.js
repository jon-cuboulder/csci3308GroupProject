import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import reducers from './reducers';
import Home from './containers/Home';
import Register from './containers/Register';
import Signin from './containers/Signin';
import Navbar from './components/Navbar';

import './App.css';

const store = createStore(reducers);

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
              <Route path="/signin" component={Signin} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
