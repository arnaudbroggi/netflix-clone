import React, { useEffect, useState, Fragment } from "react";
import instance from "../axios";
import "../styles/banner.scss";
import requests from "../requests";
import movieTrailer from "movie-trailer";
import ModalVideo from "react-modal-video";

const Banner = ({ selectedMovie }) => {
  const urlImage = "https://image.tmdb.org/t/p/original/";
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [idMovie, setIdMovie] = useState();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests[0].fetchKey);
      if (selectedMovie === 0) {
        setMovie(request.data.results[0]);
        const name = request.data.results[0]?.title || request.data.results[0]?.name || request.data.results[0]?.original_name;
        await movieTrailer(name, { id: true })
          .then((response) => setIdMovie(response))
          .catch(() => setIdMovie(""));
        setIsLoading(false);
      } else {
        const movieFilter = await request.data.results.filter((movie) => {
          return movie.id === selectedMovie;
        });

        setMovie(movieFilter[0]);
        const name = movieFilter[0]?.title || movieFilter[0]?.name || movieFilter[0]?.original_name;
        await movieTrailer(name, { id: true })
          .then((response) => setIdMovie(response))
          .catch(() => setIdMovie(""));
        setIsLoading(false);
      }
    }
    fetchData();
  }, [selectedMovie]);

  return (
    <Fragment>
      <div className="banner">
        {isLoading ? (
          <div className="loading">
            <p>Loading ...</p>
          </div>
        ) : (
          <div
            className="banner__container"
            style={{
              backgroundImage: `url(${urlImage}${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="content">
              <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
              <p>{movie.overview ? (movie.overview.length > 100 ? movie.overview.substring(0, 100) + "..." : movie.overview) : null}</p>
              {idMovie && (
                <button className="btn" onClick={() => setIsOpen(true)}>
                  Voir la bande annonce
                </button>
              )}
            </div>
            {isOpen && <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId={idMovie} onClose={() => setIsOpen(false)} />}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Banner;
