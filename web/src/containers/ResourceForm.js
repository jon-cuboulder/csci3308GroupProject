import { connect } from 'react-redux';
import ResourceForm from '../components/ResourceForm';
import * as topics from '../actions/topics';
import * as forms from '../actions/forms';
import * as api from '../api';

const FORM_NAME = 'resources-new';

const mapStateToProps = (state) => ({
  isLoading: state.form[FORM_NAME]._loading,
  form: state.form[FORM_NAME],
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (topic_id, name, url, abstract) => event => {
    event.preventDefault();
    dispatch(forms.loading(FORM_NAME, true));
    api.resourceCreate({ topic_id, name, url, abstract })
      .then( json => {
        console.log('Resource Created', json);
        dispatch(forms.clear(FORM_NAME));
        dispatch(forms.toggle('showResourceForm', false));
        dispatch(topics.addResource(topic_id, json));
      })
      .catch( err => {
        console.error('Resource Submit Failed', err);
        alert(err.error);
      })
      .then( l => dispatch(forms.loading(FORM_NAME, false)));
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceForm);
