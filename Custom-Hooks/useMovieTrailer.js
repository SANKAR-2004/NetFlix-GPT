import { useEffect } from 'react';


const useMovieTrailer = ({ id }) => {
    if (!id) return;
    async function getVideos() {
        // const data = await fetch(MOVIE_VIDEOS_API, MOVIE_OPTIONS);
        // const json = await data.json();
        // console.log(json);
    }
    useEffect(() => {
        getVideos();
    }, []);
   
}

export default useMovieTrailer;
 