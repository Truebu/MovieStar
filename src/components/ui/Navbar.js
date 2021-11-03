import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';

import { startLogout } from "../../actions/auth";
import { cartClean } from "../../actions/cart";
import { cleanMovies } from "../../actions/movie";
import { toast } from "../../features/swalMixings";


export const Navbar = ({ setQuerys }) => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const history = useHistory();
  // Handle Search Peticion
  const [forms, setForms] = useState("");
  const baseUrl = "/search/movie";
  const handleSearchChange = ({ target }) => {
    setForms(target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (forms === "") {
      toast.fire({
        icon: "warning",
        title: "Agrega algo a tu busqueda",
      });
    } else {
      setQuerys((newQuerys) => ({
        ...newQuerys,
        url: baseUrl,
        querys: {
          query: forms,
        },
      }));
    }
  };
  
  // Handle Logout
  const handleLogout = () => {
    dispatch(startLogout());
    dispatch(cartClean());
    dispatch(cleanMovies());
  };
  
  // Handle Cart Redirect
  const [logged, setLogged] = useState("");
  const isMounted = useRef(true);
  
  useEffect(() => {
    if (isMounted.current) {
      if (uid) {
        setLogged("/private/cart");
      } else {
        setLogged("/public/auth/login");
      }
    }
    return () => {
      isMounted.current = false;
    };
  }, [uid]);
  
  const { Header, Content, Footer } = Layout;
  return (
    <>
    <form className="home_topbar-form" onSubmit={handleSearch}>
      <div className="">
        <input
          className=""
          placeholder="Search"
          aria-label="Search"
          name="search"
          onChange={handleSearchChange}
        />
      </div>
      <div className="">
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
    <div className="home_topbar-user">
      <div className="">
        <Link to={logged}>Cart</Link>
      </div>
      {!(logged === "/private/cart") || (
        <>
          <div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={handleLogout}
            >
              LogOut
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={() => history.push("/private/userMovies")}
            >
              Your Movies
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};
