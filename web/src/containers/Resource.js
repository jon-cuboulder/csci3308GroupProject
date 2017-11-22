import { connect } from 'react-redux';
import Resource from '../components/Resource';
import * as api from '../api';
import * as topics from '../actions/topics';

const getResourceById = (state, topicId, resourceId) => state.topics.byId[topicId].resources.filter(r => r.id === resourceId)

const mapStateToProps = (state, ownProps) => {
  const topicId = ownProps.topicId;
  const resourceId = ownProps.resourceId;
  const resource = getResourceById(state, topicId, resourceId).pop() || {};

  return { 
    topicId,
    resourceId,
    url: resource.url,
    votes: resource.votes,
    abstract: resource.abstract,
    name: resource.name
  };
};

const mapDispatchToProps = dispatch => ({
  voteDown: (id, resourceId) => {
    api.voteDown(resourceId)
      .then(json => {
        if(json.id) {
          dispatch(topics.removeVote(id, resourceId))
        }
      })
      .catch(err => alert(err.error));
  },
  voteUp: (id, resourceId) => {
    api.voteUp(resourceId)
      .then(json => {
        if(json.id) {
          dispatch(topics.addVote(id, resourceId))
        }
      })
      .catch(err => alert(err.error));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Resource);
