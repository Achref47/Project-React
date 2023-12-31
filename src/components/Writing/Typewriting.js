import React from "react";
import Typewriter from "typewriter-effect";

function Typewriting() {
  return (
    <Typewriter
      options={{
        strings: [
          "This is My Second Book",
          "I hope you enjoy reading it",
        "Ash In The Wonderland "
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Typewriting;
