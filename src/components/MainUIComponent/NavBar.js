import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item"></li>
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                User
              </Link>
            </li>
            <li className="navbar-item" aria-class>
              <Link to="/owner" className="nav-link">
                Owner
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
