import { connect } from 'react-redux';
import Signin from '../components/Signin';
import * as api from '../api';
import * as signin from '../actions/signin';
import * as auth from '../actions/auth';
import * as forms from '../actions/forms';

const FORM_NAME = 'account-signin';

const mapStateToProps = (state) => ({
  isAuthed: !!state.auth,
  isLoading: state.form[FORM_NAME]._loading,
  email: state.form[FORM_NAME].email,
  pass: state.form[FORM_NAME].pass
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (email, pass) => (event) => {
    event.preventDefault();
    dispatch(forms.loading(FORM_NAME, true));
    dispatch(signin.submit(email, pass));
    api.signin(email, pass)
      .then(json => {
        if(json.err || json.error) {
          throw json.err;
        }
        console.log('Auth Success', json);
        dispatch(signin.success(json));
        dispatch(auth.success(json));
      })
      .catch( err => {
        alert(err);
      })
      .then( l => dispatch(forms.loading(FORM_NAME, false)));
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
