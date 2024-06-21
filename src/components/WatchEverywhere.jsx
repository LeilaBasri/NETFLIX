import React from "react";
import devicepile from '../assets/images/devicepile.png'
import videodevices from '../assets/images/videodevices.mp4'

const WatchEverywhere = () => {
  return (
    <div className="w-full h-auto bg-black">
      <div className="w-full h-2 bg-wb"></div>

      <div className="w-5/6 py-20 m-auto align-middle  flex flex-row justify-items-center justify-center">
        <div className="flex pr-2 z-10 basis-1/2">
            <div className="relative">
                <img src={devicepile} alt="device pile" />
                <div className="absolute top-10 left-24 w-2/3 -z-50 pr-5">
                    <video className="h-full w-full" playsInline autoPlay muted loop>
                        <source src={videodevices} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center -mt-10 text-left text-white">
          <h2 className="font-black text-5xl">Watch everywhere</h2>
          <p className="text-2xl font-normal mt-4">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
      </div>

      <div className="w-full h-2 bg-wb"></div>
    </div>
  );
};

export default WatchEverywhere;
