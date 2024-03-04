import React, { useRef, useState, useEffect } from "react";

export default function WebcamCapture() {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [serverResponse, setServerResponse] = useState(null);
  const [iterator, setIterator] = useState(0);
  const [flip, setFlip] = useState(true);

  useEffect(() => {
    const constraints = { video: true };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.error("Error accessing webcam:", error);
      });

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // Prevent scrolling when spacebar is pressed
        captureAndDownload();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      // Clean up: stop the webcam stream and remove event listener when component unmounts
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach((track) => {
            track.stop();
          });
        }
      }
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const captureAndDownload = () => {
    const video = videoRef.current;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    // Flip the captured image if flip is true
    if (flip) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL("image/jpg");
    setCapturedImage(dataURL);
    downloadImage(dataURL);
  };

  const downloadImage = (imageDataURL) => {
    const link = document.createElement("a");
    link.download = "captured-image.jpg";
    link.href = imageDataURL;
    link.click();
    setIterator((prevIterator) => prevIterator + 1); // Use functional update form

    // Fetch the server response after the image is downloaded
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setServerResponse((prevResponse) =>
          prevResponse ? prevResponse + data.message : data.message
        );
      });
  };

  useEffect(() => {
    console.log(iterator); // Log updated value of iterator
  }, [iterator]);

  return (
    <div className="flex justify-between m-5">
      <div>
        <h1 className="text-3xl text-green-700 font-bold mb-4 mx-5">
          Live Image Capture
        </h1>
        <div className="relative w-full h-96 mx-5">
          <video
            ref={videoRef}
            className={`w-full h-full ${flip ? "scale-x-[-1]" : ""}`}
            autoPlay
            muted
          ></video>
          <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-48 h-64 border-2 border-white"></div>
        </div>
        {capturedImage && (
          <div>
            <img
              src={capturedImage}
              alt="Captured"
              className="w-40 h-30 mx-10 my-10"
            />
          </div>
        )}
      </div>
      <div className="ml-4 w-1/3 border-2 border-gray-300 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          Server Response
        </h2>
        {serverResponse ? (
          <p className="text-3xl font-bold ">{serverResponse}</p>
        ) : (
          <p className="text-xl text-green-700">Waiting for response...</p>
        )}
      </div>
    </div>
  );
}
