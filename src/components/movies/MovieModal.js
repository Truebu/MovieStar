import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { inactiveMovie } from "../../actions/movie";
import { uiCloseModal } from "../../actions/ui";

export const MovieModal = () => {
  const dispatch = useDispatch()
  const {modalOpen} = useSelector(state => state.uiModal)
  const {
    id,
    popularity,
    date,
    overview,
    average,
    title,
    imgPath,
  } = useSelector(state => state.activeMovie)

  const handleCloseModal = () => {
    dispatch( uiCloseModal() )
    dispatch( inactiveMovie() )
  }

  return (
    <>
      <Modal show={modalOpen} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{title} - </Modal.Title>
          <Modal.Title> Popularidad: - {average}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{overview}</Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w500${imgPath}`} alt={title}/>
        <Modal.Footer>
          {date}
          <Button
            variant="primary"
          >
            Add to Cart
          </Button>
          <Button
            variant="primary"        
          >
            Buy
          </Button>
          <Button
            variant="secondary"
            onClick={ handleCloseModal }
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
