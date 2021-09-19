import React from 'react'

export const NavGenders = ({setQuerys}) => {

  const baseUrl = '/discover/movie'
  const handleFilters = (e) => {
    setQuerys(newQuerys => ({
      ...newQuerys,
      url: baseUrl,
      querys: {
        with_genres: e.target.name
      }
    }))
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="28"
          > Accion </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="12"
          > Aventura </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="16"
          > Animadas </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="35"
          > Comedia </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="80"
          > Crimen </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="27"
          > Terror </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="18"
          > Drama </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="14"
          > Fantasia </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="878"
          > Ciencia Ficcion </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="9648"
          > Misterio </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            onClick={ handleFilters }
            name="10749"
          > Romance </button>
        </li>
      </ul>
    </nav>
  )
}
