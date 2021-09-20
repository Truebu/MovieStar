import React from 'react'
import { Nav } from 'react-bootstrap'

export const NavGenders = ({ setQuerys }) => {

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
    <>
      <Nav fill variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="28">Action</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="12">Adventure</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="16">Animated</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="35">Comedy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="80">Crime</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="27">Horror</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="18">Drama</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="14">Fantasy</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="878">Science fiction</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="9648">Mistery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={handleFilters} name="10749">Romance</Nav.Link>
        </Nav.Item>
      </Nav >
    </>
  )
}
