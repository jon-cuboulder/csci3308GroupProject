import { connect } from 'react-redux';
import CommentForm from '../components/CommentForm';
import * as api from '../api';
import * as topics from '../actions/topics';
import * as forms from '../actions/forms';

const FORM_NAME = 'resources-comment';

const mapStateToProps = (state, ownProps) => ({
  comment: state.form[FORM_NAME].comment,
  isLoading: state.form[FORM_NAME]._loading,
  isAuthed: !!state.auth
});

const mapDispatchToProps = dispatch => ({
  cancel: () => dispatch(forms.toggle('comment', null)),
  change: forms.change(FORM_NAME, dispatch),
  submit: (resource_id, text) => event => {
    event.preventDefault();
    dispatch(forms.loading(FORM_NAME, true));
    api.commentCreate({ resource_id, text })
      .then( json => {
        dispatch(forms.clear(FORM_NAME));
        dispatch(forms.toggle('comment', null));
        dispatch(topics.addComment(resource_id, json));
      })
      .catch( err => alert(err.error) )
      .then( l => dispatch(forms.loading(FORM_NAME, false)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
