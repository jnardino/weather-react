import React from "react";
import darkBorealis from "./background-videos/dark-borealis.mp4"
import lightSun from "./background-videos/light-sun.mp4"

export default function Videos() {

  	return (
		<div className="videos">
	  		<video
				className="video-bg light-video"
				src={lightSun}
				autoPlay={true}
				playbackRate="0.8"
				loop={true}
				muted={true}
			></video>
			<video
				className="video-bg dark-video"
				src={darkBorealis}
				autoPlay={true}
				playbackRate="0.7"
				loop={true}
				muted={true}
			></video>
		</div>
  	);
}
