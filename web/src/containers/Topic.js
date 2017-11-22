import React from 'react';
import { connect } from 'react-redux';
import Topic from '../components/Topic';
import * as api from '../api';
import * as topics from '../actions/topics';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  const topic = state.topics.byId[id] || {};
  const isLoaded = !!topic.id;
  const name = topic.name || '';
  const resources = topic.resources || [];

  return { id, name, isLoaded, resources };
};

const mapDispatchToProps = dispatch => ({
  fetch: id => {
    api.topicGet(id)
      .then(json => dispatch(topics.load(json)))
      .catch(err => alert(err.error));
  }
});

class TopicFetch extends React.Component {
  componentDidMount() {
    if(!this.props.isLoaded) {
      this.props.fetch(this.props.id);
    }
  }

  render() {
    return <Topic {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicFetch);
