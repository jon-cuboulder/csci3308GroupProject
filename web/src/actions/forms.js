export const FORMS_CHANGE = 'FORMS_CHANGE';

export const change = (form, dispatch) => field => event => {
  dispatch({
    type: FORMS_CHANGE,
    payload: {
      [field]: event.target.value
    },
    form
  })
};
