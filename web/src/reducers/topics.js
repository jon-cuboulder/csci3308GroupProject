import { combineReducers } from 'redux';
import {
  TOPIC_LOAD,
  RESOURCE_ADD,
  RESOURCE_VOTE_UP,
  RESOURCE_VOTE_DOWN
} from '../actions/topics';

function byIdReducer(state={}, action) {
  var resources, topic;
  switch (action.type) {
    case TOPIC_LOAD:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case RESOURCE_ADD:
      resources = state[action.topicId].resources || [];
      topic = Object.assign({}, state[action.topicId], { resources: [...resources, action.payload] } );

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
