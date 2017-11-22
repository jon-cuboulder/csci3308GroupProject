import React from 'react';
import { Link } from 'react-router-dom';

function LoginLinks() {
  return (<ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link className="nav-link" to="/register">Sign Up</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/signin">Sign In</Link>
    </li>
  </ul>);

}

export default function Navbar({ email, signout }) {
  let links = <LoginLinks />;
  if(email) {
    links = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" onClick={signout} href="#signout">{email}</a>
        </li>
      </ul>);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Learn Something</Link>
      {links}
    </nav>
  );
}
