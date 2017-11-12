import { connect } from 'react-redux';
import Home from '../components/Home';
import * as search from '../actions/search';
import * as api from '../api';
import * as forms from '../actions/forms';

const FORM_NAME = 'topics-search';

const mapStateToProps = (state) => ({
  qry: state.form[FORM_NAME].qry,
  results: state.search.results
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (qry) => (event) => {
    event.preventDefault();
    dispatch(search.submit(qry));
    api.search(qry)
      .then(json => {
        dispatch(search.results(json));
      })
      .catch(err => {
        alert(err);
      });
  },
  handleChange: forms.change(FORM_NAME, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
