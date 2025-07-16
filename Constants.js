export const MOVIE_OPTIONS =  {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+process.env.REACT_APP_TMDB_API_KEY,
  }
};

export const OPENROUTER_API_KEY = process.env.REACT_APP_OPENROUTER_API_KEY;
  
// export const TRENDING_MOVIES_API =
//   "https://api.themoviedb.org/3/trending/movie/day?language=en-IN";
 
//Below is Top Rated One
export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&region=IN";


    //Removed Below One
//export const MOVIE_VIDEOS_API =
//  "https://api.themoviedb.org/3/movie/videos?language=en-US/1061474";
 
export const POSTER_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const NOW_PLAYING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIES_API = 
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const categories = [
  {
    type: "Top Rated",
    url: TOP_RATED_MOVIES_API,
  },
  {
    type: "Now Playing",
    url: NOW_PLAYING_MOVIES_API,
  },
  {
    type: "Popular",
    url: POPULAR_MOVIES_API,
  },
  {
    type: "Upcoming",
    url: UPCOMING_MOVIES_API,
  },
];

 

export const BG_IMG_URL = process.env.REACT_APP_BG_IMG_URL;
  