import React, { useState, useEffect, useRef } from "react";
import Joyride from "react-joyride";
import CropPrediction from "./CropPrediction";
import DiseasePrediction from "./DiseasePrediction";
import FertilizerPrediction from "./FertilizerPrediction";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FiSun,
  FiCloud,
  FiCloudDrizzle,
  FiCloudRain,
  FiCloudSnow,
  FiCloudLightning,
  FiCloudOff,
  FiWind,
} from "react-icons/fi";
import { BsCloudHaze } from "react-icons/bs";

const Smartgarden = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=Amrāvati&appid=e792f8ca0784f2f0a0c578241f80e6f2"
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const [run, setRun] = useState(true);

  const steps = [
    {
      target: ".video",
      content:
        "Welcome to Bhoomi! New here? Explore 'What is Bhoomi' for a quick introduction.",
      placement: "top",
    },
    {
      target: ".weather",
      content: "Keep track of your local weather with Bhoomi's Weather Card.",
      placement: "top",
    },
    {
      target: ".cropCard",
      content:
        "Plan your crops wisely with Bhoomi's predictions. Maximize yield, minimize guesswork.",
      placement: "top",
    },
    {
      target: ".bhoomiKart",
      content:
        "Explore BhoomiKart: Get access to your agricultural marketplace.",
      placement: "top",
    },
    {
      target: ".chatBot",
      content:
        "Connect with Bhoomi's Chatbot for instant farming insights. Quick answers, anytime.",
      placement: "top",
    },
    {
      target: ".sideBarCard",
      content:
        "Navigate through Bhoomi's Help and Support for quick solutions.",
      placement: "top",
    },
  ];

  useEffect(() => {
    setRun(true);
  }, []);

  const [showCropPrediction, setShowCropPrediction] = useState(false);
  const [showDiseasePrediction, setShowDiseasePrediction] = useState(false);
  const [showFertilizerPrediction, setShowFertilizerPrediction] =
    useState(false);

  const hideAllPredictions = () => {
    setShowCropPrediction(false);
    setShowDiseasePrediction(false);
    setShowFertilizerPrediction(false);
  };

  const cropPredictionRef = useRef(null);
  const fertilizerPredictionRef = useRef(null);
  const diseasePredictionRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription.toLowerCase()) {
      case "clear":
        return <FiSun size={32} />;
      case "clouds":
        return <FiCloud size={32} />;
      case "drizzle":
        return <FiCloudDrizzle size={32} />;
      case "rain":
        return <FiCloudRain size={32} />;
      case "snow":
        return <FiCloudSnow size={32} />;
      case "thunderstorm":
        return <FiCloudLightning size={32} />;
      case "mist":
      case "smoke":
      case "haze":
        return <BsCloudHaze size={32} />;
      case "wind":
        return <FiWind size={32} />;
      case "dust":
      case "sand":
      case "tornado":
        return <FiCloudOff size={32} />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 p-6 h-screen  ">
      {/* Joyride Tutorial */}
      <Joyride
        steps={steps}
        run={run}
        continuous
        showProgress
        showSkipButton
        callback={({ action, index, status }) => {
          if (["finished", "skipped"].includes(status)) {
            setRun(false);
          }
        }}
      />

      {/* Video Section */}
      <div className="flex flex-row gap-6">
        <div className="video h-80 w-1/2 relative bg-white shadow-lg rounded-3xl overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
          >
            <source src="dashvideo1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex flex-col items-start justify-center p-6 bg-black bg-opacity-50 text-white">
            <h2 className="text-4xl font-bold mb-4">
              Sow the Seeds of Progress
            </h2>
            <Link
              to="/what-is-bhoomi"
              className="bg-white text-green-700 font-bold py-2 px-4 rounded hover:bg-green-500 hover:text-white transition duration-300"
            >
              What is Bhoomi?
            </Link>
          </div>
        </div>

        {/* Weather Section */}
        <div className="weather h-80 w-1/2 bg-white shadow-lg rounded-3xl p-6 flex items-center justify-center relative">
          <div
            className="absolute inset-0 bg-cover bg-center rounded-3xl"
            style={{ backgroundImage: `url('weatherbg.png')` }}
          ></div>
          <div className="relative text-left text-gray-800">
            <div className="flex items-center mb-4">
              {weatherData &&
                weatherData.weather &&
                getWeatherIcon(weatherData.weather[0].main)}
              <p className="text-3xl font-bold ml-3">
                {weatherData && weatherData.weather[0].description}
              </p>
            </div>
            <p className="text-xl font-semibold">
              {weatherData &&
                weatherData.main &&
                (weatherData.main.temp - 273.15).toFixed(1)}{" "}
              °C
            </p>
            <p className="text-lg">{weatherData && weatherData.name}</p>
          </div>
        </div>
      </div>

      {/* Features Header */}
      <h3 className="text-4xl text-green-800 font-bold text-center mt-8">
        Bhoomi's Features
      </h3>

      {/* Feature Cards */}
      <div className="cropCard flex flex-row gap-8 justify-center mt-4">
        {/* Crop Prediction Card */}
        <div className="max-w-sm bg-white border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6">
          <img
            src="croppredict.png"
            alt="Crop Prediction"
            className="rounded-2xl h-52 w-full object-cover mb-4"
          />
          <h5 className="text-lg font-bold text-green-900 mb-2">
            Crop Prediction
          </h5>
          <p className="text-sm text-gray-700 mb-4">
            Predict the best crops for your land using soil analysis and
            environmental factors.
          </p>
          <button
            onClick={() => {
              hideAllPredictions();
              setShowCropPrediction(!showCropPrediction);
              handleScrollTo(cropPredictionRef);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Predict Now!
          </button>
        </div>

        {/* Fertilizer Prediction Card */}
        <div className="max-w-sm bg-white border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6">
          <img
            src="fertilizerPredict.png"
            alt="Fertilizer Prediction"
            className="rounded-2xl h-52 w-full object-cover mb-4"
          />
          <h5 className="text-lg font-bold text-green-900 mb-2">
            Fertilizer Prediction
          </h5>
          <p className="text-sm text-gray-700 mb-4">
            Get personalized fertilizer recommendations to improve soil
            nutrients and crop health.
          </p>
          <button
            onClick={() => {
              hideAllPredictions();
              setShowFertilizerPrediction(!showFertilizerPrediction);
              handleScrollTo(fertilizerPredictionRef);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Predict Now!
          </button>
        </div>

        {/* Disease Prediction Card */}
        <div className="max-w-sm bg-white border border-gray-300 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 p-6">
          <img
            src="diseasepredict.png"
            alt="Disease Prediction"
            className="rounded-2xl h-52 w-full object-cover mb-4"
          />
          <h5 className="text-lg font-bold text-green-900 mb-2">
            Disease Prediction
          </h5>
          <p className="text-sm text-gray-700 mb-4">
            Identify crop diseases early using advanced predictive analysis.
          </p>
          <button
            onClick={() => {
              hideAllPredictions();
              setShowDiseasePrediction(!showDiseasePrediction);
              handleScrollTo(diseasePredictionRef);
            }}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Predict Now!
          </button>
        </div>
      </div>

      {/* Prediction Components */}
      <div ref={cropPredictionRef}>
        {showCropPrediction && <CropPrediction />}
      </div>
      <div ref={diseasePredictionRef}>
        {showDiseasePrediction && <DiseasePrediction />}
      </div>
      <div ref={fertilizerPredictionRef}>
        {showFertilizerPrediction && <FertilizerPrediction />}
      </div>
    </div>
  );
};

export default Smartgarden;
