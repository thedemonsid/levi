import { useNavigate } from "react-router-dom";

function Type({ img, heading, description, routing }) {
  return (
    <div
      className="flex flex-col sm:flex-row justify-around items-center mx-4 sm:mx-[25%] mb-10 animate-img"
      onClick={routing}
    >
      <img src={img} alt="Type Image" className="w-1/2 sm:w-1/4" />
      <div className="w-full sm:w-1/2 text-center sm:text-right flex flex-col justify-between pb-10 animate-text text-basic-text font-anta">
        <h2 className="text-2xl sm:text-5xl font-bold mb-2 text-center sm:text-right">
          {heading}
        </h2>
        <p className="text-sm sm:text-lg text-center sm:text-right">{description}</p>
      </div>
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
  function handleClickSpeech() {
    navigate("/path/speech-recognition");
  }
  function handleClickWebCapture() {
    navigate("/path/web-capture");
  }
  function handleClickTutorial() {
    navigate("/path/tutorial");
  }
  return (
    <div className="bg-basic-bg h-screen p-10">
      <Type
        img={images[0]}
        heading={headings[0]}
        description={descriptions[0]}
        routing={handleClickWebCapture}
      />
      <Type
        img={images[1]}
        heading={headings[1]}
        description={descriptions[1]}
        routing={handleClickTutorial}
      />
      <Type
        img={images[2]}
        heading={headings[2]}
        description={descriptions[2]}
        routing={handleClickSpeech}
      />
    </div>
  );
}