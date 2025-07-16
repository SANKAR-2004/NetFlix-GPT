import React,{useRef,useState} from 'react';
import MovieCard from './MovieCard';
import { useSelector } from 'react-redux';
import MovieDetails from './MovieDetails';


const MovieList = ({ title, movies }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const scrollDivRef = useRef(null); 

  function scrollLeft() {
    scrollDivRef.current.scrollBy({ left: -600, behavior: "smooth" });
  }
  
  function scrollRight() {
    scrollDivRef.current.scrollBy({ left: 600, behavior: "smooth" });
  }
 

  return (
    <div className="px-6 relative">
      <h1 className="pl-2 text-2xl text-white py-3">{title}</h1>

      {movies.length > 2 && (
        <>
          <div className={(movies.length < 5 ? " md:hidden ":" ")+" w-10 h-60 left-6 mx-auto bg-gradient-to-r from-gray-50/60 absolute z-20"}>
            <button
              onClick={scrollLeft}
              className=" w-8 h-16 bg-gray-50/90 cursor-pointer mt-24 text-2xl font-bold text-center rounded-r-md text-black"
            >
              {"<"}
            </button>
          </div>

          <div className={(movies.length < 5 ? " md:hidden ":" ")+"w-10  h-60 mx-auto bg-gradient-to-l from-gray-50/60 right-6 absolute z-20"}>
            <button
              onClick={scrollRight}
              className=" w-8 h-16 bg-gray-50/90 cursor-pointer mt-24 text-2xl ml-2 font-bold text-center rounded-l-md text-black"
            >
              {">"}
            </button>
          </div>
        </>
      )}

      <div ref={scrollDivRef} className="flex overflow-x-auto no-scrollbar">
        {movies.map((item) => {
          return (
            <div onClick={()=>{setSelectedCard(item)}}  key={item.id} className="cursor-pointer">
              <MovieCard poster_path={item.poster_path} />
            </div>
          );
        })}
        {selectedCard &&
           <MovieDetails closeCard={()=>setSelectedCard(null)} movieData = {selectedCard} />
        }
      </div>
    </div>
  );
}

export default MovieList;