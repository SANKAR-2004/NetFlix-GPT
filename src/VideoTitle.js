import React from 'react'
import { useSelector } from 'react-redux';

const VideoTitle = ({title,overview}) => {

   return (
     <div className="absolute z-20 bg-gradient-to-r from-black/70 text-white  p-4 w-full aspect-video ">
       <div className="mt-[24%] ml-10">
         <p className="text-5xl p-4 font-extrabold">{title}</p>
         <p className="hidden md:block text-base px-4 mb-4 w-2/4 text-justify">
           {overview}
         </p>
         <div className='hidden md:flex'>
           <button className=" text-xl mx-4 bg-white cursor-pointer text-black rounded-lg px-4 py-2">
             Play
           </button>
           <button className=" text-xl bg-gray-500 cursor-pointer text-white rounded-lg px-4 py-2">
             info
           </button>
         </div>
       </div>
     </div>
   );
}

export default VideoTitle;