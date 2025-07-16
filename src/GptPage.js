import React from 'react';
import { BG_IMG_URL } from '../Constants';
import SearchContainer from './SearchContainer';
import SuggestionContainer from './SuggestionContainer';

const GptPage = () => {
    return (
      <div className="absolute bg-center w-full ">
        <div className="fixed -z-20 top-0 left-0 h-screen w-full">
          <img className='w-full h-screen bg-contain' src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg" />
        </div>
          <div className="fixed -z-20 top-0 left-0 h-screen w-full bg-black/40"></div>
        <div className="mt-24">
          <SearchContainer />
          <SuggestionContainer />
        </div>
      </div>
    );
}

export default GptPage