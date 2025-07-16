import React from 'react';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const TopVideoContainer = ({id,original_title,overview}) => {
  return (
    <div className="relative w-screen aspect-video">
      <VideoBackground movieId={id} />
      <VideoTitle title={original_title} overview={ overview} />
    </div>
  );
}

export default TopVideoContainer;