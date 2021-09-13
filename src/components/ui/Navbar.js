import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/public/auth/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="/">Moviestar</a>
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
    <form className="form-inline my-2 my-lg-0">
    <div className="row" >
      <div className="col">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </div>
      <div className="col">
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>
    </form>
  </div>
</nav>
  );
};
