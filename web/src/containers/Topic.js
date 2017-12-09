import React from 'react';
import { connect } from 'react-redux';
import Topic from '../components/Topic';
import * as api from '../api';
import * as topics from '../actions/topics';
import * as forms from '../actions/forms';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  const topic = state.topics.byId[id] || {};
  const isLoaded = !!topic.id;
  const name = topic.name || '';
  const resources = topic.resources || [];
  const isAdding = !!state.form.toggles.showResourceForm;

  return { id, name, isLoaded, resources, isAdding };
};

const mapDispatchToProps = dispatch => ({
  fetch: id => {
    api.topicGet(id)
      .then(json => dispatch(topics.load(json)))
      .catch(err => alert(err.error));
  },
  toggle: val => dispatch(forms.toggle('showResourceForm', val)) 
});

class TopicFetch extends React.Component {
  componentDidMount() {
    if(!this.props.isLoaded) {
      this.props.fetch(this.props.id);
    }
  }

  render() {
    if(!this.props.isLoaded) {
      return <h2>Loading...</h2>;
    }

    return <Topic {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicFetch);
