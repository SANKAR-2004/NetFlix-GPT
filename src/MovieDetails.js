import React, { useState, useEffect } from 'react';
import { MOVIE_OPTIONS } from "../Constants";

const MovieDetails = ({ movieData,closeCard }) => {
    const [videoId, setVideoId] = useState(null);
    const { title, release_date, vote_average, overview,adult } = movieData;
     
 async function getVideos() {
   const data = await fetch(
     "https://api.themoviedb.org/3/movie/" + movieData.id + "/videos?language=en-US",
     MOVIE_OPTIONS
   );
   const json = await data.json();
   const filterData = json.results.filter((item) => {
     return item.type === "Trailer";
   });
   if (json.results.length === 0) { setVideoId("4a73FmcoM5Usdfdf"); }
   else {
     setVideoId(
       filterData.length === 0 ? json.results[0].key : filterData[0].key
     );
   }
   }
    
    useEffect(() => {
        getVideos();
    }, []);
    
    if (!videoId) return null;
  return (
    <div className=" px-10 bg-gray-800 text-white fixed inset-0 bg-opacity-50 my-10 flex flex-col md:flex-row mx-auto justify-center items-center z-50 w-11/12">
      <div className="w-full mt-20 md:mt-0 md:w-8/12">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="w-full mt-6 md:mt-0 md:w-4/12 md:px-6 flex flex-col gap-4">
        <p className="font-bold text-4xl">{title}</p>
        <p className="hidden md:block text-justify text-base max-h-72 overflow-hidden">
          {overview}
        </p>
        <p className="">Rating : {vote_average}</p>
        <p>🅰️ Certified : {adult ? "Yes" : "No"}</p>
        <p>Release Data : {release_date}</p>
      </div>

      <div
        onClick={() => {
          closeCard();
        }}
        className="absolute right-5 top-4 md:right-10 md:top-8 rounded-full bg-red-500 px-4 text-xl md:text-2xl text-white py-2 cursor-pointer"
      >
        <button className='cursor-pointer'>X</button>
      </div>
    </div>
  );
}

export default MovieDetails;