import React from "react";
import { MovieControls } from "./MovieChange";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
        <h5 className="overview">{`${movie.overview}`}</h5>
      <MovieControls type={type} movie={movie} />
    </div>
  );
};