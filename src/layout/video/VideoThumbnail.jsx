import React, { useRef } from "react";

function VideoThumbnail(props) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  function handleLoadedMetadata() {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/png");
    props.onThumbnail(dataUrl);
  }

  return (
    <div>
      <video
        ref={videoRef}
        src={props.src}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ display: "none" }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
}

export default VideoThumbnail;
