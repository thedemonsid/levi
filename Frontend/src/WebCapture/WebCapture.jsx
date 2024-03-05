import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const CaptureImage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [text,setText] = useState("");
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
    try {
      const response = await axios.post(
        "http://localhost:4000/images",
        { image: imageData },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.headers["content-type"].includes("application/json")) {
        if (response.data.message) {
          setText(text+response.data.message)
          console.log(response.data.message);
        } else {
          console.log("Received JSON response without message");
        }
      } else {
        console.log("Received non-JSON response");
      }
    } catch (error) {
      if (error.response) {
        console.error(`HTTP error! status: ${error.response.status}`);
      } else {
        console.error("Error: ", error.message);
      }
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
  useEffect(() => {
    startCamera();
  }, []);

  return (
    <div className="flex justify-between items-center h-screen m-5">
      <div className=" flex flex-col items-around justify-around">
        <div className="m-5 p-5 border-2 border-black rounded-lg">
          <video ref={videoRef} autoPlay className="w-full"></video>
        </div>
        <div className="mx-5">
          <canvas
            ref={canvasRef}
            width="320"
            height="240"
            className="w-1/2"
          ></canvas>
        </div>
      </div>
      <div className="w-1/2 flex flex-col h-screen items-center justify-around">
        <div className="border border-black w-3/4 h-3/4 p-4 text-3xl font-semibold overflow-auto">
          {text}
        </div>
        <button
          onClick={captureImage}
          className="text-4xl border-4 rounded-lg bg-[#00ADB5] inline-block mb-5"
        >
          Capture Image
        </button>
      </div>
    </div>
  );
};

export default CaptureImage;
