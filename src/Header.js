import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';


const Header = () => {
  const [showGPT, setShowGPT] = useState(true);
  const user = useSelector((store) => { return store.user });

  function handleClick() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <div className="relative top-0 h-20 w-full flex justify-between items-center bg-gradient-to-b from-black">
      <img
        alt="Logo"
        className="w-48 mx-8"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />

      {user && (
        <div className="flex gap-x-3">
          {showGPT ? (
            <Link to={"/gpt-suggestion"}>
              <button onClick={()=> setShowGPT(false)} className="bg-violet-700 text-sm md:text-base cursor-pointer text-white p-2 md:px-3 md:py-2 rounded-lg">
                GPT Page
              </button>
            </Link>
          ) : (
            <Link to={"/browse"}>
              <button onClick={()=> setShowGPT(true)} className="bg-violet-700 cursor-pointer text-sm md:text-base text-white p-2 md:px-3 md:py-2 rounded-lg">
                Home Page
              </button>
            </Link>
          )}
          <button
            onClick={handleClick}
            className="mr-10 cursor-pointer bg-red-500 text-sm md:text-base text-white p-2 md:px-3 rounded-lg md:py-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;