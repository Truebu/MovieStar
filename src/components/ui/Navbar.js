import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");

    dispatch({
      type: types.logout,
    });
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
          <span>{name}</span>

          <button onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
