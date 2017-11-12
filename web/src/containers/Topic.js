import { connect } from 'react-redux';
import Topic from '../components/Topic';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let name = '';

  // Not requesting it.  Just looking if we can find it in the search
  // results for now
  if(state.search.results) {
    state.search.results.forEach((r) => {
      if(r.id === Number(id)) {
        name = r.name;
      }
    });
  }

  return { id, name };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
