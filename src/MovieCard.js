import React from "react";
import "./App.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div className="moviecards">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
        <div className="title-block">
        <h3 className="title">{movie.Title}</h3>
          <span className="movie-type" >{movie.Type}</span>
          <div className="year">
            <p>{movie.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
