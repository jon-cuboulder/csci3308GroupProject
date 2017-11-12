import { SEARCH_SUBMIT, SEARCH_RESULTS } from '../actions/search';

const initialState = {
  results: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SUBMIT:
      return Object.assign({}, state, {qry: ""});
    case SEARCH_RESULTS:
      return Object.assign({}, state, {results: action.payload});
    default:
      return state;
  }
}
