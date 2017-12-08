import { connect } from 'react-redux';

import SearchResults from '../components/SearchResults';
import { clear as searchClear } from '../actions/search';

const mapStateToProps = (state, ownProps) => ({
  results: state.search.results,
  hasSubmit: state.search.hasSubmit
});

const mapDispatchToProps = dispatch => ({
  clearSearch: () => {
    // This is a hacky way to clear search results after navigating away
    // because the react-router-redux at this time is all sorts of broken
    setTimeout(() => dispatch(searchClear()), 200);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
