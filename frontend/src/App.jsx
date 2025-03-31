import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import { IoSendSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import Video1 from "./components/Video1.jsx";
import InputForm from "./components/InputForm.jsx";

const videoData = [
  {
    src: "/girlreading.mp4",
    title: "All Your Information in One Place",
    subtitle: "Simplify Management with a Unified Data Platform.",
  },
  {
    src: "/stackboooks.mp4",
    title: "Access Anytime, Anywhere",
    subtitle: "Experience Cutting-Edge Solutions",
  },
  {
    src: "/studentswalking.mp4",
    title: "Lower Costs, Higher Value",
    subtitle: "Offering Premium Features at a Fraction of the Price.",
  },
];

function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Video1 videoSrc={videoData[currentVideoIndex].src} />

      {/* Header with Button and Contact Details */}
      <div className="absolute top-4 left-0 w-full flex items-center justify-between px-6">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4  rounded-full z-50 hover:bg-blue-700 transition"
          onClick={() => navigate("/register")}
        >
          Book a Demo <IoSendSharp className="inline ml-2" />
        </button>

        <div className="flex gap-3 text-white text-lg items-center">
          <FaPhoneAlt />
          <p>+91 80816 38914</p>
          <IoMailUnreadOutline />
          <p>contactus@a2developers.org</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-5xl font-semibold">
          {videoData[currentVideoIndex].title}
        </h1>
        <h2 className="text-2xl mt-2">{videoData[currentVideoIndex].subtitle}</h2>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<InputForm />} />
      </Routes>
    </Router>
  );
}
