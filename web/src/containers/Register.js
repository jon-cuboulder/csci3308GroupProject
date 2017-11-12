import { connect } from 'react-redux';

import Register from '../components/Register';
import * as api from '../api';
import * as register from '../actions/register';
import * as auth from '../actions/auth';
import * as forms from '../actions/forms';

const FORM_NAME = 'account-new';

const mapStateToProps = (state) => ({
  isAuthed: !!state.auth,
  form: state.form[FORM_NAME]
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (form) => (event) => {
    event.preventDefault();
    dispatch(register.submit(form.name, form.email, form.pass));
    api.register(form.name, form.email, form.pass)
      .then(json => {
        if(json.err || json.error) {
          throw json.err;
        }

        console.log("User Created", json);
        dispatch(auth.success(json));
      })
      .catch( err => {
        alert(err);
      });
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
