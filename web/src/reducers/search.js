import * as search from '../actions/search';

const initialState = {
  results: [],
  qry: '',
  hasSubmit: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case search.SEARCH_CLEAR:
      return initialState;
    case search.SEARCH_SUBMIT:
      return Object.assign({}, state, {qry: ""});
    case search.SEARCH_RESULTS:
      return Object.assign({}, state, {results: action.payload, hasSubmit: true});
    default:
      return state;
  }
}
