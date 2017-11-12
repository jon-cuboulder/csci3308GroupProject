import { combineReducers } from 'redux';
import { TOPIC_LOAD } from '../actions/topics';

function byIdReducer(state={}, action) {
  if(action.type !== TOPIC_LOAD) {
    return state;
  }

  return Object.assign({}, state, { [action.payload.id]: action.payload }); 
}

export default combineReducers({ byId: byIdReducer });
