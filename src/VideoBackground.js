import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MOVIE_OPTIONS } from "../Constants";


const VideoBackground = ({ movieId }) => {
    const [videoId, setVideoId] = useState(null);
     
    async function getVideos() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
        MOVIE_OPTIONS
      );
      const json = await data.json();
      const filterData = json.results.filter((item) => {
            return item.type === "Trailer";
      });
      setVideoId((filterData.length === 0)?json.results[0].key:filterData[0].key);
    }

    useEffect(() => {
        getVideos();
    }, []);

    if (!videoId) return null; 
    return (
      <div className="absolut w-full  no-scrollbar bg-violet-800">
        <iframe
          className="absolute z-10 top-0 w-screen aspect-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}

export default VideoBackground;
