import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import newStore from './store';
import Navbar from './containers/Navbar';

/* Routes */
import Home from './containers/Home';
import Register from './containers/Register';
import Signin from './containers/Signin';
import Topic from './containers/Topic';
import TopicForm from './containers/TopicForm';
import Profile from './containers/Profile';
import PageNotFound from './components/PageNotFound';

import './App.css';

const store = newStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <div className="container-fluid">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/signin" component={Signin} />
                <Route path="/topics/create" component={TopicForm} />
                <Route path="/topics/:id" component={Topic} />
                <Route path="/users/:id" component={Profile} />
                <Route component={PageNotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
