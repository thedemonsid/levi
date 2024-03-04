import React, { useRef, useEffect } from "react";

const CaptureImage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCamera = async () => {
    const constraints = { video: { facingMode: "user" } };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    videoRef.current.srcObject = stream;
  };

  const captureImage = () => {
    const context = canvasRef.current.getContext("2d");
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    const imageData = canvasRef.current.toDataURL("image/jpeg");
    sendImageToServer(imageData);
  };

  const sendImageToServer = async (imageData) => {
    const response = await fetch("http://localhost:5000/images", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: imageData }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.headers.get("content-type").includes("application/json")) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Received non-JSON response");
    }
  };

  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.keyCode === 32) {
        captureImage();
      }
    };

    window.addEventListener("keydown", handleSpacebarPress);

    return () => {
      window.removeEventListener("keydown", handleSpacebarPress);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay></video>
      <canvas ref={canvasRef} width="640" height="480"></canvas>
      <button onClick={startCamera}>Start Camera</button>
    </div>
  );
};

export default CaptureImage;