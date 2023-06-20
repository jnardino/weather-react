import React from "react";

export default function Videos() {
  return (
    <div className="videos">
      <video
        className="video-bg light-video"
        src="background-videos/light-sun.mp4"
        autoPlay={true}
        loop
        muted
      ></video>
      <video
        className="video-bg dark-video"
        src="/background-videos/dark-borealis.mp4"
        autoPlay={true}
        loop
        muted
      ></video>
    </div>
  );
}