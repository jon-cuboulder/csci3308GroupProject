import { connect } from 'react-redux';
import Home from '../components/Home';
import * as search from '../actions/search';
import * as api from '../api';

const mapStateToProps = (state) => ({
  qry: state.search.qry,
  results: state.search.results
});

const mapDispatchToProps = dispatch => ({
  handleSubmit: (qry) => (event) => {
    event.preventDefault();
    dispatch(search.submit(qry));
    api.search(qry)
      .then(json => {
        dispatch(search.results(json.results));
      })
      .catch(err => {
        alert(err);
      });
  },
  handleChange: (event) => dispatch(search.handleChange(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
