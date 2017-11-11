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

export default function Navbar({ email }) {
  let links = <LoginLinks />;
  if(email) {
    links = <span className="navbar-text">{email}</span>
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">Learn Something</Link>
      {links}
    </nav>
  );
}
