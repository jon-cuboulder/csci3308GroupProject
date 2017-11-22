import { connect } from 'react-redux';
import Home from '../components/Home';
import * as search from '../actions/search';
import * as api from '../api';
import * as forms from '../actions/forms';

const FORM_NAME = 'topics-search';

const mapStateToProps = (state) => ({
  isLoading: state.form[FORM_NAME]._loading,
  qry: state.form[FORM_NAME].qry,
  results: state.search.results
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (qry) => (event) => {
    event.preventDefault();
    dispatch(forms.loading(FORM_NAME, true));
    dispatch(search.submit(qry));
    api.search(qry)
      .then(json => {
        dispatch(forms.clear(FORM_NAME));
        dispatch(search.results(json));
      })
      .catch(err => {
        alert(err.error);
      })
      .then( l => dispatch(forms.loading(FORM_NAME, false)));
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
