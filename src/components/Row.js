import React, { Fragment, useState, useEffect } from "react";
import instance from "../axios";
import "../styles/row.scss";
import RowItem from "./RowItem";
import RowItemLarge from "./RowItemLarge";

const Row = ({ title, fetchUrl, isLargeRow, handleMovie }) => {
  const urlImage = "https://image.tmdb.org/t/p/original/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const renderElement = () => {
    if (isLargeRow) {
      return movies.map((movie, index) => <RowItemLarge handleMovie={handleMovie} urlImage={urlImage} key={index} movie={movie} />);
    } else {
      return movies.map((movie, index) => <RowItem urlImage={urlImage} movie={movie} key={index} />);
    }
  };
  return (
    <Fragment>
      <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">{renderElement()}</div>
      </div>
    </Fragment>
  );
};

export default Row;
