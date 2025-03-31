import React from "react";

const Video1 = ({ videoSrc }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10">
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video1;
