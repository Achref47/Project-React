import React from 'react';
import AudioPlayer from 'react-audio-player';

import audiofile from "../../Music/Silenethill.mp3";

const AudioComponent = () => {
  return (
    <div>
      <AudioPlayer src={audiofile} autoPlay controls />
    </div>
  );
};

export default AudioComponent;
