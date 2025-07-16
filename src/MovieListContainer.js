import React from 'react';
import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { categories } from '../Constants';

const MovieListContainer = () => {

 
  const TopRatedMovies = useSelector(store => store.movies.topRatedMovies);
  const NowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
  const PopularMovies = useSelector(store => store.movies.popularMovies);
  const UpComingMovies = useSelector(store => store.movies.upComingMovies);

  if (!TopRatedMovies || !NowPlayingMovies || !PopularMovies || !UpComingMovies) { return null; }
  const combined = [TopRatedMovies, NowPlayingMovies, PopularMovies, UpComingMovies];
  
  return (
    <div className="bg-black">

      {categories.map((item,index) => {
            return <MovieList key={item.type} title={item.type} movies={combined[index]} />;
       })}
     
    </div>
  );
}

export default MovieListContainer;
