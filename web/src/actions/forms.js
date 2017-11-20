/*
 * Action Types
 */
export const FORMS_CHANGE = 'FORMS_CHANGE';
export const FORMS_LOADING = 'FORMS_LOADING';

/*
 * Action Creators
 */
export const change = (form, dispatch) => field => event => {
  dispatch({
    type: FORMS_CHANGE,
    payload: {
      [field]: event.target.value
    },
    form
  })
};

export const loading = (form, isLoading) => ({
  type: FORMS_LOADING,
  payload: isLoading,
  form
});
