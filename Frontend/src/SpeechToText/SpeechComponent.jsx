import React, { useEffect, useRef, useState } from "react";
import KeyboardVoiceTwoToneIcon from "@mui/icons-material/KeyboardVoiceTwoTone";
import "../App.css";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.lang = "en-IN";
recognition.interimResults = true;
recognition.maxAlternatives = 1;

let finalTranscript = "";
let data = "";
const SpeechComponent = () => {
  const outputRef = useRef(null);
  const notesRef = useRef(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // ...

  // ...
  useEffect(() => {
    recognition.onstart = () => {
      setIsSpeaking(true);
    };

    recognition.onend = () => {
      setIsSpeaking(false);
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }
      outputRef.current.textContent = finalTranscript + interimTranscript;
      // notesRef.current.textContent = finalTranscript + interimTranscript;
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onnomatch = (event) => {
      outputRef.current.textContent = "I didn't recognize that command.";
    };

    recognition.onerror = (event) => {
      outputRef.current.textContent = `Error occurred in recognition: ${event.error}`;
    };
  }, []);

  // ...
  return (
    <div className="flex flex-col md:flex-row bg-blue-50">
      <div
        className="w-full h-screen md:w-1/3 p-4 
                            border-b-2 md:border-r-2 
                            md:border-b-0 border-zinc-500"
      >
        <h3 className="text-4xl text-center text-green-600 font-semibold mb-1">
          Transcript
        </h3>
        <p ref={outputRef} className="mt-4 ml-3 text-lg text-gray-700"></p>
      </div>
      <div
        className=" bg-[#222831] flex flex-col items-center w-full h-screen md:w-1/3 p-4 
                            border-b-2 md:border-r-2 
                            md:border-b-0 border-zinc-500"
      >
        <div className="mx-[20vh] sm:mb-0">
          <KeyboardVoiceTwoToneIcon
            sx={{ fontSize: 200 }}
            className={isSpeaking ? "glow rounded-full" : ""}
          />
        </div>
        <div className="flex flex-col items-center sm:p-[10vh]">
          <button
            onClick={() => {
              recognition.start();
              console.log("Ready to receive a command.");
            }}
            className="start bg-[#393E46] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mb-5 h-20 w-48"
          >
            Start
          </button>
          <button
            onClick={() => recognition.stop()}
            className="stop bg-[#393E46] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-xl h-20 w-48"
          >
            Stop
          </button>
        </div>
        <button
          onClick={async () => {
            setIsLoading(true); // start loading
            const response = await fetch(
              "https://levi-three.vercel.app/api/question",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  question:
                    "Give notes with Points with different content seprated by different lines of following transcript" +
                    finalTranscript,
                }),
              }
            );
            data = await response.json();
            notesRef.current.textContent = data.answer; // render the answer in the notesRef element
            setIsLoading(false); // end loading
          }}
          className="bg-[#00ADB5] hover:bg-green-700 text-white sm:text-2xl font-bold py-6 px-4 text-xl rounded-xl h-20 w-40 sm:w-48 mt-[10vh]"
        >
          Create Notes
        </button>
      </div>
      <div
        className="w-full h-screen md:w-1/3 p-4 
                            border-b-2 md:border-r-2 
                            md:border-b-0 border-zinc-500"
      >
        <h3 className="text-4xl text-green-600 text-center font-semibold mb-1">
          Notes
        </h3>
        <p
          ref={notesRef}
          className="mt-4 ml-0 text-lg text-gray-700"
          dangerouslySetInnerHTML={{ __html: data.answer }}
        ></p>
        {isLoading && (
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl text-[#00ADB5] font-bold">
              Fetching Response...
            </p>
          </div>
        )}
      </div>
    </div>
  );
  // ...
};

export default SpeechComponent;