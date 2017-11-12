import { connect } from 'react-redux';
import TopicForm from '../components/TopicForm';
import * as forms from '../actions/forms';
import * as api from '../api';

const FORM_NAME = 'topics-new';

const mapStateToProps = (state) => ({
  name: state.form[FORM_NAME].name || ''
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (name, history) => event => {
    event.preventDefault();
    api.topicCreate( { name } )
      .then( json => {
        history.push(`/topics/${json.id}`);
      })
      .catch( err => {
        console.error(err);
        alert('submit failed');
      });
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TopicForm);
