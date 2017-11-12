import { FORMS_CHANGE } from '../actions/forms';

const initialState = {
  'topics-search': { 
    qry: '' 
  },
  'topics-new': {
    name: ''
  },
  'account-new': {
    name: '',
    email: '',
    pass: '',
    pass2: ''
  },
  'account-signin': {
    email: '',
    pass: ''
  }
};

/* reducer for the form for creating a user */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FORMS_CHANGE:
      let sp =  Object.assign({}, state);
      sp[action.form] = Object.assign({}, state[action.form], action.payload);
      return sp;
    default:
      return state;
  }
}
