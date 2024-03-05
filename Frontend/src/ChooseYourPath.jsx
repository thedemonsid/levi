import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <header className="mb-10 sticky top-0 backdrop-blur-lg text-basic-text bg-transparent mt-0 rounded-lg mx-auto max-w-screen shadow-2xl sm:text-xl">
      <nav className="flex justify-around align-middle">
        <div className="logo flex items-center justify-center text-2xl sm:text-4xl font-bold text-basic-text">
         <h3 className="font-sans">ECHO🎯</h3>
        </div>
        <div className="get-started flex justify-center items-center">
          <button
            onClick={handleClick}
            className="bg-teal-500 hover:bg-gray-900 text-basic-text font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-xl border-solid shadow-2xl mt-3 mb-3 text-sm sm:text-xl transform hover:scale-95 transition-transform duration-200"
          >
           Home
          </button>
        </div>
      </nav>
    </header>
  );
}
// corousel code
function Carousel() {
  const images = [
    "https://source.unsplash.com/random/?Empowement?&1",
    "https://source.unsplash.com/random/?Vision?&2",
    "https://source.unsplash.com/random/?Empowement?&3",
    "https://source.unsplash.com/random/?Empowement?&4",
     "https://source.unsplash.com/random/?Empowement?&5",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
    {images.map((src, index) => (
  <div key={index} className={`${index !== activeIndex ? 'hidden' : ''} duration-700 ease-in-out`} data-carousel-item={index === 1 ? "active" : undefined}>
    <img src={src} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
  </div>
))}
      </div>
      <button type="button" onClick={handlePrev} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black dark:bg-gray-800/30 group-hover:bg-bas dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" onClick={handleNext} className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

function Type({ emoji, heading, description,routing }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div 
      className={`flex flex-col align-middle items-center justify-around m-2 sm:m-5 rounded-3xl p-5 font-anta shadow-lg ${
        isHovered ? "cursor-pointer bg-nav-bg border-[-2px]" : ""
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={() => {
        // Add your pop-up functionality here
        routing();
        console.log("Clicked!");
      }}
    >
      <span className="text-6xl sm:text-9xl">{emoji}</span>
      <h2 className="text-lg sm:text-xl font-bold my-2 sm:my-5 text-center max-w-96 text-basic-text">
        {heading}
      </h2>
      <p className="text-sm sm:text-gray-500 text-center">{description}</p>
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
  <div className=" h-screen bg-basic-bg">
    <Header />
    {/* <Carousel /> */}
    <div className="flex items-center h-screen justify-center bg-basic-bg ">  
       <div className="flex flex-col">
        <div className="flex justify-center items-center m-0">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold my-5 text-center font-anta text-basic-text">
        Choose Your Path
      </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-around items-center ">
          <Type
            emoji={"🌟"}
            heading={headings[0]}
            description={descriptions[0]}
            routing={handleClickWebCapture}
            
          ></Type>
          <Type
           emoji={"💪"}
            heading={headings[1]}
            description={descriptions[1]}
            routing={handleClickTutorial}
          ></Type>
          <Type
            emoji={"🎯"}
            heading={headings[2]}
            description={descriptions[2]}
            routing={handleClickSpeech}
          ></Type>
        </div>
      </div>
    </div>
    </div>
  );
}