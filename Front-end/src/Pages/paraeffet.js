import React from 'react'
import Typewriter from "typewriter-effect";


function paraeffet() {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
                  typewriter
                    .pauseFor(20)

                    .typeString(
                      ` vendre des produits cosmétique <br/> en ligne et par tout au maroc`
                    )
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
        }}
      />
    </div>
  );
}

export default paraeffet
