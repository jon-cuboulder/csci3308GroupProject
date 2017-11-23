import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';
import * as api from '../api';
import * as users from '../actions/users';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;

  return {
    id,
    user: state.users.byId[id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetch: id => {
    api.usersGet(id)
      .then(json => dispatch(users.load(json)) )
      .catch( err => {
        console.error(err);
        alert(err.error);
      });
  }
});


class ProfileFetch extends React.Component {
  componentDidMount() {
    if(!this.props.user) {
      this.props.fetch(this.props.id);
    }
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>;
    }

    return <Profile {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFetch);
