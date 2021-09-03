import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/public/auth/login");
  };

  return (
    <nav>
      <Link to="/">MovieStar</Link>

      <div>
        <div>
          <NavLink
            exact
            to="/cart"
          >
            Shopping Cart
          </NavLink>
        </div>
      </div>

      <div>
        <ul>
          <button onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
