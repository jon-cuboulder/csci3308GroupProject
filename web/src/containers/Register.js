import { connect } from 'react-redux';
import Register from '../components/Register';
import * as api from '../api';
import * as register from '../actions/register';

const mapStateToProps = (state) => ({
  form: state.register.form
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (form) => (event) => {
    event.preventDefault();
    dispatch(register.submit(form.name, form.email, form.pass));
    api.register(form.name, form.email, form.pass)
      .then(json => {
        console.log(json);
        alert("user created");
      });
  },
  handleChange: (field) => (event) => {
    dispatch(register.formChange(field, event.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
