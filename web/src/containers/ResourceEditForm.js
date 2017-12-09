import { connect } from 'react-redux';
import ResourceEditForm from '../components/ResourceEditForm';
import * as forms from '../actions/forms';
import * as api from '../api'
import * as topics from '../actions/topics'

const formName = resourceId => `resource-edit-${resourceId}`

const mapStateToProps = (state, ownProps) => {
  const form =  state.form[formName(ownProps.resourceId)];
  let value = ownProps.name;
  let isLoading = false;
  if(form) {
    value = form.name;
    isLoading = form._loading;
  }

  return {
    value,
    isLoading
  };
};

const mapDispatchToProps = dispatch => ({
  handleChange: resourceId => forms.change(`resource-edit-${resourceId}`, dispatch),
  handleSubmit: (topicId, resourceId, value) => e => {
    e.preventDefault();
    dispatch(forms.loading(formName(resourceId), true));

    api.editResourceName(resourceId, value)
      .then( json => {
        dispatch(topics.editResource(topicId, resourceId, {name: value}));
        dispatch(topics.toggleEdit(topicId, resourceId));
      })
      .catch(err => alert(err.error))
      .then( l => dispatch(forms.loading(formName(resourceId), false)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceEditForm);
