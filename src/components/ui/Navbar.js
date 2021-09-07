import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/public/auth/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="/">Moviestar</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="/">Disabled</a>
        </li>
      </ul>
    <form className="form-inline my-2 my-lg-0">
    <div className="row" >
      <div className="col">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      </div>
      <div className="col">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </div>
    </div>
    </form>
  </div>
</nav>
  );
};
