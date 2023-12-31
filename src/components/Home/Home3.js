import React from "react";
import Typewriter from "typewriter-effect";

function Type2() {
  return (
    <Typewriter
      options={{
        strings: [
          "If you need any help Don't hesitate to contact me",
          "I will be always at your services",
        "Don't Be Shy...! "
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type2;
