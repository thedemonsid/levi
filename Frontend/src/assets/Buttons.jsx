import React, { useState } from "react";
import './Buttons.css'
const MyButton = ({ letter, onClick, isSelected ,imgsrc}) => (
    <button
      onClick={() => onClick(letter)}
      className={`font-bold py-0 px-1 rounded-2xl text-3xl shadow-lg ${
        isSelected ? 'bg-green-300 hover:bg-green-400 text-white' : 'bg-yellow-300 hover:bg-yellow-400 text-white'
      }`}
    >
      <img src={imgsrc} alt="" />
    </button>
  );

// Define the Alphabet component
const Alphabet = ({ images ,imageSignLang}) => {
  const [selectedImage, setSelectedImage] = useState(imageSignLang['A']);
  const [selectedLetter, setSelectedLetter] = useState('A');

  const handleClick = (letter) => {
    setSelectedImage(imageSignLang[letter]);
    setSelectedLetter(letter);
  };

  return (
    
    <div className="flex items-center justify-center min-h-screen bg-slate-50 rounded-2xl ">
      <div className="p-5 rounded-lg shadow-lg">
      <div className="Main">
        <div className="heading">
            <h1>Learn Your Alphabets</h1>
        </div>
        <div className="mb-4 rounded-3xl border-2 max-h-[400px] flex justify-center bg-slate-100">
        
          {selectedImage && (
            <img src={selectedImage} alt="selected" className="imageSignLang"  />
          )}
        </div>
        <div className="Alpha"><div className="grid grid-cols-6 gap-4">
          {"ABCDEF".split("").map((letter, index) => (
            <MyButton key={index} letter={letter} onClick={handleClick} isSelected={letter === selectedLetter} imgsrc = {images[letter]}/>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-4">
          {"GHIJKLM".split("").map((letter, index) => (
            <MyButton key={index} letter={letter} onClick={handleClick} isSelected={letter === selectedLetter} imgsrc = {images[letter]}/>
          ))}
        </div>
        <div>
        {"NOPQRS".split("").map((letter, index) => (
            <MyButton key={index} letter={letter} onClick={handleClick} isSelected={letter === selectedLetter} imgsrc = {images[letter]}/>
          ))}
        </div>
        <div>
        {"TUVWXYZ".split("").map((letter, index) => (
            <MyButton key={index} letter={letter} onClick={handleClick} isSelected={letter === selectedLetter} imgsrc = {images[letter]}/>
          ))}
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};



export default Alphabet;
