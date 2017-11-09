/*
 * Action Types
 */
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';
export const SEARCH_CHANGE = 'SEARCH_CHANGE';

/*
 * Action Creators
 */
export const submit = (qry) => ({
  type: SEARCH_SUBMIT,
  qry: qry
});

export const handleChange = (text) => ({
  type: SEARCH_CHANGE,
  qry: text
});
