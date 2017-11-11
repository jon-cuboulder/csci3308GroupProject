import { connect } from 'react-redux';
import Signin from '../components/Signin';
import * as api from '../api';
import * as signin from '../actions/signin';

const mapStateToProps = (state) => ({
  form: state.signin.form
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (form) => (event) => {
    event.preventDefault();
    dispatch(signin.submit(form.email, form.pass));
    api.signin(form.email, form.pass)
      .then(json => {
        console.log('Auth Success', json);
        dispatch(signin.success(json));
      })
      .catch( err => {
        alert(err);
      });
  },
  handleChange: (field) => (event) => {
    dispatch(signin.formChange(field, event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
