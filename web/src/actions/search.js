/*
 * Action Types
 */
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const SEARCH_CHANGE = 'SEARCH_CHANGE';
export const SEARCH_RESULTS = 'SEARCH_RESULTS';

/*
 * Action Creators
 */
export const submit = (qry) => ({
  type: SEARCH_SUBMIT,
  qry: qry.trim()
});

export const handleChange = (qry) => ({
  type: SEARCH_CHANGE,
  qry
});

export const results = (payload) => ({
  type: SEARCH_RESULTS,
  payload
});
