import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { startLogout } from '../../actions/auth';
import { cartClean } from '../../actions/cart';
import { toast } from '../../features/swalMixings';

export const Navbar = ({setQuerys}) => {

  const dispatch = useDispatch()
  const {uid} = useSelector(state => state.auth)
  const history = useHistory()
  // Handle Search Peticion
  const [forms, setForms] = useState("")
  const baseUrl = '/search/movie'
  const handleSearchChange = ({target}) => {
    setForms(target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    if (forms === '') {
      toast.fire({
        icon: 'warning',
        title: 'Agrega algo a tu busqueda'
      })
    } else {
      setQuerys(newQuerys => ({
        ...newQuerys,
        url: baseUrl,
        querys: {
          query: forms
        }
      }))
    }
  }

  // Handle Logout
  const handleLogout = () => {
    dispatch(startLogout())
    dispatch(cartClean())
  };


  // Handle Cart Redirect
  const [logged, setLogged] = useState('')
  const isMounted = useRef(true)

  useEffect(() => {
    if (isMounted.current) {
      if (uid) {
        setLogged("/private/cart")
      } else {
        setLogged("/public/auth/login")
      }
    }
    return () => {
      isMounted.current = false
    }
  },[uid])
  
  return (//StartLoading
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="/navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="/">
          Moviestar
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <span className="nav-item">
            <Link
              to={logged}
            >
              Cart
            </Link>
          </span>          
        </ul>
        <form
          className="form-inline my-2 my-lg-0"
          onSubmit={handleSearch}
        >
          <div className="row">
            <div className="col">
              <input
                className="form-control mr-sm-2"
                placeholder="Search"
                aria-label="Search"
                name="search"
                onChange = { handleSearchChange }
              />
            </div>
            <div className="col">
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        {
          !(logged === "/private/cart") ||
          <div className="col">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={handleLogout}
            >
              LogOut
            </button>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={ () => history.push('/private/userMovies')}
            >            
              Your Movies            
            </button>
          </div>
        }
      </div>
    </nav>
  );
};
