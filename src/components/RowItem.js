import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import ModalVideo from "react-modal-video";
import movieTrailer from "movie-trailer";

function RowItem({ movie, urlImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [trailerId, setTrailerId] = useState(false);

  const handleTrailerShow = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  useEffect(() => {
    movieTrailer(movie?.title || movie?.name || movie?.original_name, { id: true })
      .then((url) => {
        setTrailerId(url);
      })
      .catch((error) => setTrailerId(""));
  }, [movie]);

  return (
    <Fragment>
      <div className="row__poster">
        <img src={`${urlImage}${movie.backdrop_path}`} alt={movie.name} />
        <p>{movie?.title || movie?.name || movie?.original_name}</p>
        {trailerId && (
          <div className="row__poster--content">
            <p onClick={() => handleTrailerShow()}>
              Watch the trailler : <FontAwesomeIcon style={{ marginLeft: "10px" }} icon={faEye} />{" "}
            </p>
          </div>
        )}
      </div>
      {trailerId && <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={trailerId} onClose={() => setIsOpen(false)} />}
    </Fragment>
  );
}

export default RowItem;
