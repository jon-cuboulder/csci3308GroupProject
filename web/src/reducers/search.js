import { SEARCH_CHANGE, SEARCH_SUBMIT, SEARCH_RESULTS } from '../actions/search';

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
    case SEARCH_RESULTS:
      return Object.assign({}, state, {results: action.payload});
    default:
      return state;
  }
}
