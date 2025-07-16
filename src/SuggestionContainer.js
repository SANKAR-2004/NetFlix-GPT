import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_OPTIONS } from '../Constants';
import { addAllMovies,toggleLoader } from '../ReduxStore/gptSlice';
import MovieList from './MovieList';
import Loader from './Loader';


const SuggestionContainer = () => {
  
  const movies = useSelector((store) => store.gpt.suggestedMovies);
  const showLoader = useSelector(store => store.gpt.showLoader);
  const suggestedMovies = useSelector((store) => store.gpt.AllSuggestedMovies);
  const dispatch = useDispatch();
 
  async function movieDetails(name) {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+name+"&include_adult=false&language=en-US&page=1",MOVIE_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  async function getMovies(){
    const result = movies.map((item) => {
      return movieDetails(item);
    });
    const PromiseArray = await Promise.all(result);
    console.log(PromiseArray);
    dispatch(addAllMovies(PromiseArray));
    dispatch(toggleLoader(false));
  }

  useEffect(() => {
    getMovies();
  }, [movies]);
  
 
  if (movies.length == 0) return null;

  return (
    <div className="">
       {showLoader && <Loader/>}
      {suggestedMovies.map((item, index) => {
        return (
          item.length !== 0 && (
            <MovieList key={index} title={movies[index]} movies={item} />
          )
        );
      })}
    </div>
  );
}

export default SuggestionContainer;