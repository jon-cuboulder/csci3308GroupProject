import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import * as forms from '../actions/forms';

const mapStateToProps = (state, ownProps) => ({
  isCommenting: state.form.toggles.comment === ownProps.resourceId
});

const mapDispatchToProps = (dispatch) => ({
  toggle: (resourceId) => {
    dispatch(forms.toggle('comment', resourceId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
