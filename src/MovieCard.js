import React from 'react';
import { POSTER_IMAGE_URL } from "../Constants";
import MovieDetails from './MovieDetails';

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="hover:scale-90 border-2 border-gray-500 rounded-lg w-44 mx-4 flex-shrink-0">
      <img
        className="h-60 w-full rounded-lg text-white"
        alt="Movie Card"
        src={POSTER_IMAGE_URL+poster_path}
      />
    </div>
    
  );
}

export default MovieCard;