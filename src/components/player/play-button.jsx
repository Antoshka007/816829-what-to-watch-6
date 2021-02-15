import React from 'react';


const PlayButton = () => {
  return (
    <button className="player__play" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"/>
      </svg>
      <span>Play</span>
    </button>
  );
};


export default PlayButton;
