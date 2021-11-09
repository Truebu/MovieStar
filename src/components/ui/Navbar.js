import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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

  return (
    <Container>
      <Row className="">
        <Col>
          <form onSubmit={handleSearch}>
            <input
              className=""
              placeholder="Search"
              aria-label="Search"
              name="search"
              onChange={handleSearchChange}
            />
          </form>
        </Col>
        <Col>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </Col>
        <Col>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => history.push(logged)}
          >
            Cart
          </button>
        </Col>
        {!(logged === "/private/cart") || (
          <>
            <Col>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={handleLogout}
              >
                LogOut
              </button>
            </Col>
            <Col>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                onClick={() => history.push("/private/userMovies")}
              >
                Your Movies
              </button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
