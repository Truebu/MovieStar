import React from 'react';
//import { Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { movieActive } from '../../actions/movie';
import { uiOpenModal } from '../../actions/ui';

export const MovieScreen = ({
  id,
  overview,
  popularity,
  vote_average,
  title,
  poster_path,
  release_date
}) => {
  
  const dispatch = useDispatch()
  const movieInfo = {
    id,
    overview,
    popularity,
    vote_average,
    title,
    poster_path,
    release_date
  }
  const handleOpenMovie = () => {
    dispatch(uiOpenModal())
    dispatch(movieActive(movieInfo))
  }

  return (
    <>
    <div
      onClick={ handleOpenMovie }
    >
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
      <span>{release_date}</span>
    </div>
    </>
  )
}
