import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Learn Something</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}
