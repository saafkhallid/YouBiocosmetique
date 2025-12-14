import React from 'react'
import Typewriter from "typewriter-effect";


function Texteff() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Welcome   to ")
           .typeString(" YouBiocosmétique ")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(10)
            // .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </div>
  );
}

export default Texteff
