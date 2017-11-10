import { connect } from 'react-redux';
import Home from '../components/Home';
import * as search from '../actions/search';

const mapStateToProps = (state) => ({
  qry: state.search.qry
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (qry) => (event) => {
    event.preventDefault();
    dispatch(search.submit(qry));
  },
  handleChange: (event) => dispatch(search.handleChange(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
