import React from "react";
// import { VideoPlayer } from "@videojs-player/react";
// import "video.js/dist/video-js.css";
import Spacer from "../components/Spacer";
import videoo from "../video/Как стать хакером - Командная строка Windows(1).mp4";

const VideoCourses = () => {
  return (
    <div>
      <Spacer count={3} />
      {/* <VideoPlayer
        src={videoo}
        poster="/your-path/poster.jpg"
        controls
        loop={true}
        volume={0.6}
      /> */}
      <video
        src={videoo}
        style={{ width: "50%", height: "50vh" }}
        controls
        loop
        autoPlay
        typeof="mp4"
      ></video>
    </div>
  );
};

export default VideoCourses;
