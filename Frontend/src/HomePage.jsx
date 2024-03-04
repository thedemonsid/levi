import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import image0 from "./assets/image0.png";
import logo1 from "./assets/logo1.png"

function Header() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/path")
  }
  return (
    <header className="mb-10 fixed-header bg-white mt-0">
      <nav className="flex justify-around align-middle mt-5 mb-3">
        <div className="logo flex items-center justify-center">
          <img src={logo} className="w-72 h-16 "></img>
        </div>
        <div className="get-started flex justify-center items-center">
          <button onClick={handleClick} className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-xl shadow-2xl text-xl transform hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>
      </nav>
      <hr></hr>
    </header>
  );
}
function Login() {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/path")
  }
  return (
    <div className="flex justify-around items-center mx-[25%] mt-[150px]">
      <img
        src={logo1}
        alt="Description"
        className="w-1/2"
      />
      <div className="w-1/2 text-right flex flex-col justify-between pb-10">
        <h2 className="text-2xl font-bold mb-2 text-center">
          The free, fun, and effective way to learn a language!
        </h2>
        <div className="get-started flex justify-center items-center mt-4">
          <button onClick={handleClick} className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-xl shadow-2xl text-3xl transform hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
function Feature({
  heading = "What is our motto?",
  description = "Jai Shree Ram",
  img = "https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/23ab11cb1e1a9aff54facdf57833373d.svg",
  position = "right",
}) {
  return (
    <div className="flex justify-around items-center mt-10 mx-[25%] mb-10">
      {position === "left" ? (
        <img src={img} alt="Description" className="w-1/2 animate-img" />
      ) : null}
      <div className="w-1/2 text-right flex flex-col justify-between pb-10 animate-text">
        <h2 className="text-5xl font-bold mb-2 text-center text-green-700">
          {heading}
        </h2>
        <p className="text-lg text-center">{description}</p>
      </div>
      {position === "right" ? (
        <img src={img} alt="Description" className="w-1/2 animate-img" />
      ) : null}
    </div>
  );
}
const descriptions = [
  "Empowering the deaf and mute community with sign language to speech and speech to text tools for seamless communication. Join us for an inclusive learning experience tailored to your needs.",
  "Our approach, designed for accessibility, combines research-backed methods with engaging content to enhance literacy and communication skills for the deaf and mute.",
  "Stay engaged and motivated on your learning journey with interactive tools like note-taking and educational games, ensuring a rewarding experience for all users.",
  "Experience personalized learning like never before. Our lessons adapt to your level and pace, providing a tailored education experience.",
];

const headings = [
  "Inclusive. Innovative. Empowering.",
  "Accessibility through Research",
  "Engagement and Motivation",
  "Personalized Learning Experience",
];

const images = [
  image0,
  "https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/08ec8d0260c55c054e1b97bcbc96ea0f.svg",
  "https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/833a22b2834050d139f266a29899bb00.svg",
  "https://d35aaqx5ub95lt.cloudfront.net/images/splash/lottie/9d3c2c99dd19996319a372f79b2ed3c1.svg",
];

const HomePage = () => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/path")
  }
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <hr></hr>
      <Feature
        heading={headings[0]}
        description={descriptions[0]}
        img={images[0]}
        position="right"
      />
      <Feature
        heading={headings[1]}
        description={descriptions[1]}
        img={images[1]}
        position="left"
      />
      <Feature
        heading={headings[2]}
        description={descriptions[2]}
        img={images[2]}
        position="right"
      />
      <Feature
        heading={headings[3]}
        description={descriptions[3]}
        img={images[3]}
        position="left"
      />
      <hr></hr>
      <div className="get-started flex justify-center items-center mt-4">
        <button onClick={handleClick}className="bg-green-700 hover:bg-green-900 text-white font-bold py-3 px-6 rounded-xl shadow-2xl text-3xl transform hover:scale-105 transition-transform duration-200 mb-20">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
