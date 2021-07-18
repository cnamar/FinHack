import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navselect.css";
function Navselect() {
  const [tab1, settab1] = useState({ active: true });
  const [tab2, settab2] = useState({ active: false });

  return (
    <div className="flex justify-between px-8 py-4">
      <div className="flex gap-4">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="tab">User</p>
        </Link>
        <Link to="/owner" style={{ textDecoration: "none" }}>
          <p className="tab">Subscription owners</p>
        </Link>
      </div>
    </div>
  );
}

export default Navselect;
