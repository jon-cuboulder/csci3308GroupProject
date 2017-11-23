import React from 'react';
import { Link } from 'react-router-dom';

function LoginLinks() {
  return (<ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <Link className="btn btn-success" to="/register">Sign Up</Link>
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
          <a className="nav-link" onClick={signout} href="#signout">{email}</a>
        </li>
      </ul>);
  }

  return (
    <nav className="navbar navbar-expand navbar-dark" style={{"background-color": "#0D47A1"}}>
      <Link className="navbar-brand" to="/">
        <span className="fa fa-bold"></span>
        old
      </Link>
      <div className="navbar-collapse">
        {links}
      </div>
    </nav>
  );
}
