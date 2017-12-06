import { combineReducers } from 'redux';
import {
  COMMENT_ADD,
  RESOURCE_ADD,
  RESOURCE_DEL,
  RESOURCE_VOTE_UP,
  RESOURCE_VOTE_DOWN,
  TOPIC_LOAD,
  EDIT_COMMENT,
  EDIT_RESOURCE_NAME
} from '../actions/topics';

function byIdReducer(state={}, action) {
  var resources, topic;
  const deepCopy = obj => JSON.parse(JSON.stringify(obj));

  switch (action.type) {
    case EDIT_RESOURCE_NAME:
      resources = state[action.topicId].resources || [];
      resources = [...resources].map(r => {
        if(r.id === action.resourceId) {
          r.name = action.payload.name;
        }
        return r;
      });
      topic = Object.assign({}, state[action.topicId], { resources });

      return Object.assign({}, state, { [action.topicId]: topic });
    case EDIT_COMMENT:
      resources = state[action.topicId].resources || [];
      resources = [...resources].map(r => {
        if(r.id === action.resourceId) {
          r.$editing = !r.$editing;
        }
        return r;
      });
      topic = Object.assign({}, state[action.topicId], { resources });

      return Object.assign({}, state, { [action.topicId]: topic });
    case COMMENT_ADD:
      for (let topicId of Object.keys(state)) {
        // only have the resourceId, need to find the topic
        resources = deepCopy(state[topicId].resources || []);
        for (let r of resources) {
          if (r.id === action.resourceId) {
            topic = deepCopy(state[topicId]);
            r.comments = r.comments || [];
            r.comments.push(action.payload);
            break;
          }

        }

        if(topic) {
          topic.resources = resources;
          return Object.assign({}, state, {[topic.id]: topic});
        }
      }

      return state;
    case TOPIC_LOAD:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case RESOURCE_ADD:
      resources = state[action.topicId].resources || [];
      topic = Object.assign({}, state[action.topicId], { resources: [...resources, action.payload] } );

      return Object.assign({}, state, { [action.topicId]: topic });
    case RESOURCE_DEL:
      topic = deepCopy(state[action.topicId]);
      resources = topic.resources || [];
      topic.resources = resources.filter( r => r.id != action.resourceId);

      return Object.assign({}, state, { [action.topicId]: topic });
    case RESOURCE_VOTE_DOWN:
      resources = state[action.topicId].resources || [];
      resources = [...resources].map(r => {
        if(r.id === action.resourceId) {
          r.votes = r.votes - 1;
        }
        return r;
      });
      topic = Object.assign({}, state[action.topicId], { resources });

      return Object.assign({}, state, { [action.topicId]: topic });
    case RESOURCE_VOTE_UP:
      resources = state[action.topicId].resources || [];
      resources = [...resources].map(r => {
        if(r.id === action.resourceId) {
          r.votes = r.votes + 1;
        }
        return r;
      });
      topic = Object.assign({}, state[action.topicId], { resources });

      return Object.assign({}, state, { [action.topicId]: topic });
    default:
      return state;
  }
}

export default combineReducers({ byId: byIdReducer });
