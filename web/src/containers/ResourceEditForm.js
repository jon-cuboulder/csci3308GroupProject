import { connect } from 'react-redux';
import ResourceEditForm from '../components/ResourceEditForm';
import * as forms from '../actions/forms';
import * as api from '../api'
import * as topics from '../actions/topics'


const mapStateToProps = (state, ownProps) => {
	const form =  state.form["resource-edit-" + ownProps.resourceId];
	let value = ownProps.name;
	if(form) {
		value = form.name;
	}
	return {
		value
	};
};

const mapDispatchToProps = dispatch => ({
	handleChange: resourceId => forms.change(`resource-edit-${resourceId}`, dispatch),
	handleSubmit: (topicId, resourceId, value) => e => {
		e.preventDefault();

		api.editResourceName(resourceId, value)
			.then( json => {
				dispatch(topics.editResource(topicId, resourceId, {name: value}));
				dispatch(topics.toggleEdit(topicId, resourceId));
			})
			.catch(err => alert(err.error));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceEditForm);