import { connect } from 'react-redux';
import ResourceForm from '../components/ResourceForm';
import * as forms from '../actions/forms';
import * as api from '../api';

const FORM_NAME = 'resources-new';

const mapStateToProps = (state) => ({
  name: state.form[FORM_NAME].name || '',
  abstract: state.form[FORM_NAME].abstract || '',
  user_id: state.auth ? state.auth.user.id : '',
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (topic_id, user_id, name, abstract) => event => {
    event.preventDefault();
    api.resourceCreate({ topic_id, user_id, name, abstract })
      .then( json => {
        console.log(json);
        alert('succeeded');
      })
      .catch( err => {
        console.error(err);
        alert('submit failed');
      });
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm);
