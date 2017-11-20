import { combineReducers } from 'redux';
import { TOPIC_LOAD, RESOURCE_ADD } from '../actions/topics';

function byIdReducer(state={}, action) {
  switch (action.type) {
    case TOPIC_LOAD:
      return Object.assign({}, state, { [action.payload.id]: action.payload });
    case RESOURCE_ADD:
      const resources = [...state[action.topicId].resources];
      resources.push(action.payload);
      const topic = Object.assign({}, state[action.topicId], { resources } );
      return Object.assign({}, state, { [action.topicId]: topic });
    default:
      return state;
  }
}

export default combineReducers({ byId: byIdReducer });
