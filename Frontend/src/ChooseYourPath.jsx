import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Type({ img, heading, description,routing }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`flex flex-col align-middle items-center justify-around m-5 rounded-3xl border-[3px] p-5 ${
        isHovered ? "cursor-pointer bg-gray-200" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={() => {
        // Add your pop-up functionality here
        routing();
        console.log("Clicked!");
      }}
    >
      <img src={img} alt="Type Image" className="mx-auto w-40 h-auto mt-5" />
      <h2 className="text-xl font-bold my-5 text-center  max-w-96">
        {heading}
      </h2>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
}
const images = [
  "https://d35aaqx5ub95lt.cloudfront.net/images/owls/84d58856b19e9d0ec3c59cb014139853.svg",
  "https://d35aaqx5ub95lt.cloudfront.net/images/owls/84d58856b19e9d0ec3c59cb014139853.svg",
  "https://d35aaqx5ub95lt.cloudfront.net/images/owls/84d58856b19e9d0ec3c59cb014139853.svg",
];
const headings = [
  "Enhance Communication with Sign-lang to Text",
  "Empower Learners with Effective Writing Skills",
  "Innovative Learning Solutions",
];

const descriptions = [
  "Effortless sign language to text conversion.",
  "Enhance English proficiency with interactive learning methods.",
  "Note-Taker catered for the deaf community with AI support.",
];

export default function ChooseYourPath() {
  const navigate = useNavigate();
  function handleClickSpeech(){
    navigate("/path/speech-recognition")
  }
  function handleClickWebCapture(){
    navigate("/path/web-capture")
  }
  function handleClickTutorial(){
    navigate("/path/tutorial")
  }
  return (
    <div className="flex items-center h-screen justify-center ">
      <div className="flex flex-col">
        <div className="flex justify-center items-center m-5">
          <h1 className="text-4xl font-bold opacity-80">Choose Your Path</h1>
        </div>
        <div className="flex justify-center">
          <Type
            img={images[0]}
            heading={headings[0]}
            description={descriptions[0]}
            routing={handleClickWebCapture}
          ></Type>
          <Type
            img={images[1]}
            heading={headings[1]}
            description={descriptions[1]}
            routing={handleClickTutorial}
          ></Type>
          <Type
            img={images[2]}
            heading={headings[2]}
            description={descriptions[2]}
            routing={handleClickSpeech}
          ></Type>
        </div>
      </div>
    </div>
  );
}
