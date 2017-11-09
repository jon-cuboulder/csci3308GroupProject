import { connect } from 'react-redux';
import Home from '../components/Home';
import * as search from '../actions/search';

const mapStateToProps = (state) => {
  console.log(state);
  return {
  qry: state.search.qry
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (qry) => (e) => {
    e.preventDefault();
    dispatch(search.submit(qry));
  },
  handleChange: (text) => dispatch(search.handleChange(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
