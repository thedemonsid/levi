import React, { useState } from "react";
import image from  '../Sign Language/A.jpeg';
import image2 from '../Sign Language/C.jpeg';
import image3 from '../Sign Language/B.jpeg';
import image4 from '../Sign Language/K.jpeg';

const Matching = () => {
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [iterator, setIterator] = useState(0);
  const [allWrong, setAllWrong] = useState(false); // State to track if all options should turn red

  const questions = [image, image2, image3, image4];
  const options = ["A", "K", "C", "B"];

  const correctAnswers = {
    [image]: "A",
    [image2]: "C",
    [image3]: "B",
    [image4]: "K"
  };

  const handleQuestionClick = (question) => {
    if (answers[question]) return; // If the question has been answered, make it unclickable
    setSelected(question); // Set selected to the image URL
  };

  const handleAnswerClick = (answer) => {
    if (selected && !answers[selected]) {
      if (correctAnswers[selected] === answer) { // Use selected (image URL) to access correct answer
        setAnswers({ ...answers, [selected]: answer });
      } else {
        setAllWrong(true); // Set allWrong to true when a wrong answer is selected
        setWrongAnswer(true); 
        setTimeout(() => {
          setWrongAnswer(false);
          setAllWrong(false); // Reset allWrong after 0.5 second
        }, 500); // Flash red for 0.5 second
      }
      setSelected(null);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen py-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-5 text-green-600">Match The Following</h1>
      <div className="grid grid-cols-2 gap-5 bg-gray-500 p-10 rounded-lg w-full max-w-xl mx-auto">
        <div>
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              disabled={answers[question]} // Disable if already answered
              className={`w-13 h-0 m-1 hover: font-bold transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-lg shadow-md ${
                answers[question]
                  ? "bg-green-500 text-white"
                  : selected === question
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              <img src={question} alt={`Question ${index + 1}`} />
            </button>
          ))}
        </div>
        <div>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              className={`w-full mb-12 h-32 m-3 font-bold transition-transform duration-500 ease-in-out transform hover:scale-110 rounded-lg shadow-md ${
                (allWrong || (wrongAnswer && selected === option)) // Apply red background color if allWrong or wrongAnswer is true
                  ? "bg-red-500 text-white"
                  : Object.values(answers).includes(option)
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Matching;