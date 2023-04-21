import React, { useRef, useState } from "react";

function VideoThumbnail({ url }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleLoadedMetadata = () => {
    // Set the canvas dimensions to match the video
    const canvas = canvasRef.current;
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw the first frame of the video on the canvas
    const ctx = canvas.getContext("2d");
    ctx.drawImage(videoRef.current, 0, 0);

    // Convert the canvas to a data URL and set it as the thumbnail
    const dataUrl = canvas.toDataURL("image/png");
    setThumbnail(dataUrl);
  };

  return (
    <div>
      <video ref={videoRef} src={url} onLoadedMetadata={handleLoadedMetadata} />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      {thumbnail && <img src={thumbnail} alt="Video thumbnail" />}
    </div>
  );
}

export default VideoThumbnail;
