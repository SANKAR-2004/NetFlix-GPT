import React, { useEffect } from 'react';
import { TOP_RATED_MOVIES_API, MOVIE_OPTIONS } from "../Constants";
import TopVideoContainer from './TopVideoContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addAllMovies } from "../ReduxStore/MovieSlice";
import MovieListContainer from './MovieListContainer';
import { categories } from '../Constants';


const Browse = () => {
  
  const dispatch = useDispatch();
  const movies = useSelector((store) => { return store.movies.nowPlayingMovies; });
  console.log("---->", movies);

  async function getMovies(url) {
    const data = await fetch(url, MOVIE_OPTIONS);
    const json = await data.json();
   // console.log(json.results);
    return json.results;
   // dispatch(addMovies(json.results));
  }

  async function getAllMovies() {
    const results = categories.map((item) => {
      return getMovies(item.url);
    });
    const PromiseArray = await Promise.all(results);
    dispatch(addAllMovies(PromiseArray));
  }
  
  useEffect(() => {
    getAllMovies();
  }, []);
 
  if (movies.length === 0) return null;
  return (
    <div className='overflow-hidden'>
      <TopVideoContainer {...movies[4]} />
      <MovieListContainer/>
    </div>
  )
}

export default Browse;