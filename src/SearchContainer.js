import React, { useRef, useState, useEffect } from 'react';
import { OPENROUTER_API_KEY } from '../Constants';
import { useDispatch,useSelector } from 'react-redux';
import { addMovies } from '../ReduxStore/gptSlice';
import { toggleLoader } from '../ReduxStore/gptSlice';

const SearchContainer = () => {
    const inputRef = useRef(null);
  const dispatch = useDispatch();
  const showLoader = useSelector(store => store.gpt.showLoader);
  
    async function handleClick() {
       
       const result = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: "Bearer " + OPENROUTER_API_KEY,
            "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
            "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "mistralai/mistral-nemo:free",
            messages: [
              {
                role: "user",
                content: 'Give me 5 movie names only. Do not include anything else. Format your answer exactly like this: "Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5" Now, give me 5 ['+ inputRef.current.value+ '].',
              },
            ],
          }),
       });
        const json = await result.json();
      console.log(json);
      let movieArray = [];
      // const movieArray = json.choices[0].message.content.split(",");
      try {
        movieArray = JSON.parse(`[${json.choices[0].message.content}]`);
        dispatch(addMovies(movieArray));
      }
      catch(error) {
        dispatch(addMovies([]));
        alert("There is a Problem with GPT API! Please Try Again Later....");
      }

      console.log(movieArray);
    }

    return (
        <div className='flex w-12/12 md:w-8/12 mx-auto p-6'>
            <input type='text' ref={inputRef} className='w-full bg-gray-200 rounded-l-lg pl-6 py-3 outline-0 border-2 border-gray-400' placeholder='What you like to watch?' />
        <button onClick={() => { 
          dispatch(toggleLoader(true));
          handleClick();
        }} className='bg-red-500 cursor-pointer font-bold px-4 py-1 text-white rounded-r-lg '>Search</button>
        </div>
    );
}

export default SearchContainer;