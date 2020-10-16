import React from "react";

function RowItemLarge({ movie, urlImage, handleMovie }) {
  return (
    <div onClick={() => handleMovie(movie.id)} className="row__poster row__posterLarge">
      <img src={`${urlImage}${movie.poster_path}`} alt={movie.name} />
    </div>
  );
}

export default RowItemLarge;
