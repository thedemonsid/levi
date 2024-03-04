import React, { useState } from "react";
import "./Buttons.css";
import styled from "styled-components";

const MyButton = ({ letter, onClick, isSelected, imgsrc }) => (
  <button
    onClick={() => onClick(letter)}
    className={`font-bold py-1 px-2 rounded-lg text-2xl shadow-md button-glow ${
      isSelected ? "bg-green-300 text-white" : "bg-yellow-300 text-black"
    }`}
  >
    <img src={imgsrc} alt="" style={{ width: "100px", height: "90px" }} />
  </button>
);

const Alpha = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
`;

const Alphabet = ({ images, imageSignLang }) => {
  const [selectedImage, setSelectedImage] = useState(imageSignLang["A"]);
  const [selectedLetter, setSelectedLetter] = useState("A");

  const handleClick = (letter) => {
    setSelectedImage(imageSignLang[letter]);
    setSelectedLetter(letter);
  };

  return (
    <div className="flex items-center justify-center bg-slate-50 rounded-xl ">
      <div className="p-8 rounded-lg shadow-md">
        <div className="Main">
        <div className="flex justify-center items-center h-20 text-6xl">
            <h1 style={{ fontFamily: 'Honk' }}>Learn Your Alphabets</h1>
        </div>
          <div className="mb-8 rounded-xl border-4 max-h-[400px] flex justify-center bg-slate-100">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="selected"
                className="imageSignLang"
                style={{ width: "350px", height: "350px" }}
              />
            )}
          </div>
          <Alpha>
            <div className="grid grid-cols-6 gap-6">
              {"ABCDEF".split("").map((letter, index) => (
                <MyButton
                  key={index}
                  letter={letter}
                  onClick={handleClick}
                  isSelected={letter === selectedLetter}
                  imgsrc={images[letter]}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-6">
              {"GHIJKLM".split("").map((letter, index) => (
                <MyButton
                  key={index}
                  letter={letter}
                  onClick={handleClick}
                  isSelected={letter === selectedLetter}
                  imgsrc={images[letter]}
                />
              ))}
            </div>
            <div className="grid grid-cols-6 gap-6">
              {"NOPQRS".split("").map((letter, index) => (
                <MyButton
                  key={index}
                  letter={letter}
                  onClick={handleClick}
                  isSelected={letter === selectedLetter}
                  imgsrc={images[letter]}
                />
              ))}
            </div>
            <div className="grid grid-cols-7 gap-6">
              {"TUVWXYZ".split("").map((letter, index) => (
                <MyButton
                  key={index}
                  letter={letter}
                  onClick={handleClick}
                  isSelected={letter === selectedLetter}
                  imgsrc={images[letter]}
                />
              ))}
            </div>
          </Alpha>
        </div>
      </div>
    </div>
  );
};

export default Alphabet;