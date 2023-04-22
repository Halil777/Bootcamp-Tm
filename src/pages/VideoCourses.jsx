import React from "react";
// import { VideoPlayer } from "@videojs-player/react";
// import "video.js/dist/video-js.css";
import Spacer from "../components/Spacer";
import videoo from "../video/Как стать хакером - Командная строка Windows(1).mp4";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const VideoCourses = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <title>{t("videoCourses")} | BootcampTm</title>
      </Helmet>
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
