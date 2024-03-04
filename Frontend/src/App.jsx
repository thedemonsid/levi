import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChooseYourPath from "./ChooseYourPath";
import SpeechComponent from "./SpeechToText/SpeechComponent.jsx";
import HomePage from "./HomePage";
import Matching from "./Tutorial_Components/Matching";
import WebcamCapture from "./WebCapture.jsx";
import Alphabet from "./Buttons";
import { images, imageSignLang } from "./Images";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/path" element={<ChooseYourPath />} />
        <Route path="/path/speech-recognition" element={<SpeechComponent />} />
        <Route path="/path/matching" element={<Matching />} />
        <Route path="/path/web-capture" element={<WebcamCapture />} />
        <Route
          path="/path/tutorial"
          element={
            <Alphabet images={images} imageSignLang={imageSignLang}></Alphabet>
          }
        ></Route>
        <Route
          path="/path/tutorial/match"
          element={<Matching></Matching>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
