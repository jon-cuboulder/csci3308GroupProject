import { connect } from 'react-redux';
import TopicForm from '../components/TopicForm';
import * as forms from '../actions/forms';
import * as api from '../api';
import * as topics from '../actions/topics';

const FORM_NAME = 'topics-new';

const mapStateToProps = (state) => ({
  name: state.form[FORM_NAME].name || ''
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (name, history) => event => {
    event.preventDefault();
    dispatch(forms.loading(FORM_NAME, true));
    api.topicCreate( { name } )
      .then( json => {
        dispatch(forms.clear(FORM_NAME));
        dispatch(topics.load(json));
        history.push(`/topics/${json.id}`);
      })
      .catch( err => {
        console.error(err);
        alert(err.error);
      })
      .then( l => dispatch(forms.loading(FORM_NAME, false)));
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);
