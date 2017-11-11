import Navbar from '../components/Navbar';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  email: state.auth ? state.auth.user.email : ''
});

export default connect(mapStateToProps, null)(Navbar);
