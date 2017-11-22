import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import * as auth from '../actions/auth';

const mapStateToProps = (state) => ({
  email: state.auth ? state.auth.email : ''
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(auth.clear())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
