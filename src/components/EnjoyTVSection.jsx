import React from "react";
import enjoy from "../assets/images/tv.png";
import videonetflix from "../assets/images/videonetflix.mp4";

function EnjoyTVSection() {
  return (
    <div className="bg-black w-full h-auto flex justify-center items-center -z-50">
      <div className="flex flex-row justify-center items-center w-5/6 p-20">
        <div className="w-3/6 text-white text-left flex flex-col items-start justify-items-start font-sans align-top">
          <h2 className="text-5xl font-bold mb-5">Enjoy on your TV</h2>
          <p className="text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="w-4/6 relative -z-0">

          <div className="w-full h-full z-50">
            <img src={enjoy} alt="TV" className="w-full" />
          </div>
          
          <div className="w-5/6 h-5/6 absolute top-6 right-12 p-6 -z-50">
            <video className="h-full w-full" playsInline autoPlay muted loop>
              <source src={videonetflix} type="video/mp4"></source>
            </video>
          </div>

        </div>
      </div>
    </div>
  );
}

export default EnjoyTVSection;
