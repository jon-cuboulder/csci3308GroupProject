import { connect } from 'react-redux';
import Signin from '../components/Signin';
import * as api from '../api';
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
    api.signin(email, pass)
      .then(json => {
        if(json.err || json.error) {
          throw json.error;
        }
        console.log('Auth Success', json);
        dispatch(forms.clear(FORM_NAME));
        dispatch(auth.success(json.token, email));
      })
      .catch( err => {
        alert(err.error);
      })
      .then( l => dispatch(forms.loading(FORM_NAME, false)));
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
