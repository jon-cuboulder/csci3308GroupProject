import { connect } from 'react-redux';

import Register from '../components/Register';
import * as api from '../api';
import * as register from '../actions/register';
import * as auth from '../actions/auth';

const mapStateToProps = (state) => ({
  isAuthed: !!state.auth,
  form: state.register.form
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (form) => (event) => {
    event.preventDefault();
    dispatch(register.submit(form.name, form.email, form.pass));
    api.register(form.name, form.email, form.pass)
      .then(json => {
        console.log("User Created", json);
        dispatch(auth.success(json));
      })
      .catch( err => {
        alert(err);
      });
  },
  handleChange: (field) => (event) => {
    dispatch(register.formChange(field, event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
