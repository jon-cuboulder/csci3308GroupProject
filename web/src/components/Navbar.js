import React from 'react';
import { Link } from 'react-router-dom';
import Urn from '../UrnLogo.jpg';

function LoginLinks() {
  return (<ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link className="btn btn-success" to="/register" style={{"backgroundColor": "#35b940"}}>Sign Up</Link>
    </li>
    <li className="nav-item">
      <Link className="ml-3 btn btn-outline-light" to="/signin">Sign In</Link>
    </li>
  </ul>);

}

export default function Navbar({ email, signout }) {
  let links = <LoginLinks />;
  if(email) {
    links = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button type="button" className="btn btn-link nav-link" onClick={signout}>
            {email}
          </button>
        </li>
      </ul>);
  }

  return (
    <nav className="navbar navbar-expand navbar-dark" style={{"backgroundColor": "#1fa3d1"}}>
      <Link className="navbar-brand" to="/">
          <img src={Urn} alt="The Learn Urn logo" height="30" />
          The Learn Urn
      </Link>
      <div className="navbar-collapse">
        {links}
      </div>
    </nav>
  );
}
