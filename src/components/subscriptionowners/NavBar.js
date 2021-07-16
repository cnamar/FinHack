import React from "react";
import { Link } from "react-router-dom";

function OwnerNavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item"></li>
            <li className="navbar-item">
              <Link to="/owner/create" className="nav-link">
                Create subscription
              </Link>
            </li>
            <li className="navbar-item" aria-class>
              <Link to="/owner/other" className="nav-link">
                Other
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default OwnerNavBar;
