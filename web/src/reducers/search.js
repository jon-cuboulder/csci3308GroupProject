import { SEARCH_CHANGE, SEARCH_SUBMIT } from '../actions/search';

const initialState = {
  qry: "",
  results: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CHANGE:
      return Object.assign({}, state, {qry: action.qry});
    case SEARCH_SUBMIT:
      return Object.assign({}, state, {qry: ""});
    default:
      return state;
  }
}
