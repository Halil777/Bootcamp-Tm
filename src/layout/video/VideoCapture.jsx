import React, { useState } from "react";
import VideoThumbnail from "./VideoThumbnail";

function VideoCapture() {
  const [thumbnail, setThumbnail] = useState(null);

  function handleThumbnail(thumbnailUrl) {
    setThumbnail(thumbnailUrl);
  }

  return (
    <div>
      <VideoThumbnail
        src="https://www.youtube.com/watch?v=erFHBBlG7Wc&list=RDerFHBBlG7Wc&start_radio=1"
        onThumbnail={handleThumbnail}
      />
      {thumbnail && <img src={thumbnail} alt="Video Thumbnail" />}
    </div>
  );
}

export default VideoCapture;
