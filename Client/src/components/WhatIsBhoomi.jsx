import React, { useState } from "react";
import Lottie from "lottie-react";
import farmerAnimation from "../assets/animations/happyfarmer.json";

const WhatIsBhoomi = () => {
  const cardImages = [
    ["1.jpeg", "2.jpeg"],
    ["3.jpeg", "4.jpeg"],
    ["5.jpeg", "6.jpeg"],
  ];

  const challengeImages = [
    "soilerosion.jpg",
    "waterscarcity.jpg",
    "airpollution.jpg",
  ];

  const challengeNames = ["Drought", "Water Scarcity", "Air Pollution"];

  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const toggleLanguage = () => {
    setSelectedLanguage((prevLanguage) =>
      prevLanguage === "english" ? "hindi" : "english"
    );
  };

  const getLocalizedContent = (englishContent, hindiContent) => {
    return selectedLanguage === "english" ? englishContent : hindiContent;
  };

  return (
    <div className="p-0 bg-gradient-to-b from-green-100 via-green-200 to-green-400">
      {/* Navigation Bar */}
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full z-50 top-0">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>
        <div className="flex items-center"></div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center">
          <button
            onClick={toggleLanguage}
            className="text-blue-500 mr-6 text-xl font-bold  hover:text-blue-900 focus:outline-none"
          >
            {getLocalizedContent("Switch to Hindi", "अंग्रेजी में स्विच करें")}
          </button>
          <a
            href="/about-us"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md mr-4  hover:scale-110 duration-300"
          >
            {getLocalizedContent("About Us", "हमारे बारे में")}
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 font-bold hover:scale-110 duration-300"
          >
            {getLocalizedContent(
              "Go Back to Dashboard",
              "डैशबोर्ड पर वापस जाएं"
            )}
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md  hover:scale-110 duration-300"
          >
            {getLocalizedContent("Sign Up", "साइन अप")}
          </button>
        </div>
        {/* Language Switch */}
      </div>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-green-800 mb-4">
            {getLocalizedContent("What is Bhoomi?", "भूमि क्या है?")}
          </h2>
          <p className="text-2xl text-gray-700 mb-8 px-10">
            {getLocalizedContent(
              "Bhoomi is a smart platform that helps farmers with soil health, crop selection, and sustainable farming practices. It uses advanced technology to improve productivity and ensure better farming results.",
              "भूमि एक स्मार्ट प्लेटफॉर्म है जो किसानों को मिट्टी की गुणवत्ता, फसल चयन और स्थायी खेती के लिए मदद करता है। यह उत्पादकता में सुधार और बेहतर खेती के परिणाम सुनिश्चित करने के लिए उन्नत तकनीक का उपयोग करता है।"
            )}
          </p>
          <div className="w-1/2 mx-auto">
            <Lottie animationData={farmerAnimation} loop autoplay />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-r from-green-300 via-yellow-200 to-green-200">
        <div className="container mx-auto text-center px-8">
          <h2 className="text-5xl font-extrabold text-green-900 mb-16">
            {getLocalizedContent("Services We Provide", "हमारी सेवाएं")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Crop Prediction Card */}
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 p-8">
              <img
                src="croppredict.png"
                alt="Crop Prediction"
                className="rounded-t-xl h-56 w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                {getLocalizedContent("Crop Prediction", "फसल का पूर्वानुमान")}
              </h3>
              <p className="text-gray-700 text-lg">
                {getLocalizedContent(
                  "Predict the most suitable crops for your land based on soil analysis and environmental factors.",
                  "मिट्टी के विश्लेषण और पर्यावरणीय कारकों के आधार पर अपनी ज़मीन के लिए सबसे उपयुक्त फसलों का पूर्वानुमान करें।"
                )}
              </p>
            </div>

            {/* Fertilizer Prediction Card */}
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 p-8">
              <img
                src="fertilizerPredict.png"
                alt="Fertilizer Prediction"
                className="rounded-t-xl h-56 w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                {getLocalizedContent(
                  "Fertilizer Prediction",
                  "उर्वरक का पूर्वानुमान"
                )}
              </h3>
              <p className="text-gray-700 text-lg">
                {getLocalizedContent(
                  "Receive personalized recommendations for fertilizers to optimize soil nutrients and enhance crop growth.",
                  "मिट्टी के पोषण को अनुकूलित करने और पौध विकास को बढ़ावा देने के लिए उर्वरक के लिए व्यक्तिगत सुझाव प्राप्त करें।"
                )}
              </p>
            </div>

            {/* Disease Prediction Card */}
            <div className="bg-white border border-gray-300 rounded-xl shadow-xl hover:shadow-2xl transition-transform transform hover:scale-105 p-8">
              <img
                src="diseasepredict.png"
                alt="Disease Prediction"
                className="rounded-t-xl h-56 w-full object-cover mb-6"
              />
              <h3 className="text-2xl font-semibold text-green-900 mb-4">
                {getLocalizedContent(
                  "Disease Prediction",
                  "रोग का पूर्वानुमान"
                )}
              </h3>
              <p className="text-gray-700 text-lg">
                {getLocalizedContent(
                  "Identify potential crop diseases early on through predictive analysis, ensuring timely intervention.",
                  "पूर्वानुमानात्मक विश्लेषण के माध्यम से संभावित कृषि रोगों की पहचान सुनिश्चित करें, समय पर हस्तक्षेप सुनिश्चित करें।"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Does Bhoomi Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-extrabold text-green-900 mb-8 text-center">
            {getLocalizedContent(
              "How Does Bhoomi Work?",
              "भूमि कैसे काम करता है?"
            )}
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              <span className="font-bold text-green-800">
                {getLocalizedContent(
                  "Soil Nutrient Analysis:",
                  "मिट्टी के पोषण विश्लेषण:"
                )}
              </span>{" "}
              {getLocalizedContent(
                "Bhoomi utilizes advanced machine learning algorithms to analyze soil samples and determine their nutrient composition. By understanding the specific nutrient levels in your soil, you can make informed decisions about fertilization and soil management.",
                "भूमि उन्नत मशीन लर्निंग एल्गोरिदम का उपयोग करता है ताकि मिट्टी के नमूनों का विश्लेषण कर सके और उनके पोषण संरचना का निर्धारण कर सके। अपनी मिट्टी में विशिष्ट पोषण स्तरों को समझकर आप उर्वरक और मिट्टी प्रबंधन के बारे में सूचित निर्णय ले सकते हैं।"
              )}
            </p>
            <p>
              <span className="font-bold text-green-800">
                {getLocalizedContent("Crop Recommendation:", "फसल की सिफारिश:")}
              </span>{" "}
              {getLocalizedContent(
                "Based on the analysis of your soil's nutrient composition and other environmental factors, Bhoomi provides personalized recommendations for suitable crops. These recommendations take into account factors such as climate, soil type, and crop compatibility, helping you maximize yields while preserving soil health.",
                "आपकी मिट्टी के पोषण संरचना और अन्य पर्यावरणीय कारकों के विश्लेषण पर आधारित, भूमि सुझाव देता है जो उपयुक्त फसलों के लिए। इन सुझावों में जलवायु, मिट्टी का प्रकार, और फसल संगतता जैसे कारकों का ध्यान रखा जाता है, जिससे आप मात्रा में वृद्धि कर सकते हैं जबकि मिट्टी स्वास्थ्य को संरक्षित रखते हैं।"
              )}
            </p>
            <p>
              <span className="font-bold text-green-800">
                {getLocalizedContent(
                  "Sustainable Farming Practices:",
                  "सतत खेती व्यवसाय:"
                )}
              </span>{" "}
              {getLocalizedContent(
                "In addition to crop recommendations, Bhoomi offers insights into sustainable farming practices. Learn about crop rotation, cover cropping, and other techniques to improve soil fertility, reduce erosion, and minimize environmental impact.",
                "फसल के सुझावों के अलावा, भूमि सतत खेती व्यवसाय में अंतर्दृष्टि प्रदान करता है। मिट्टी की पोषण क्षमता में सुधार करने, इरोजन को कम करने, और पर्यावरणीय प्रभाव को कम करने के लिए क्रॉप रोटेशन, कवर क्रॉपिंग, और अन्य तकनीकों के बारे में जानें।"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ... (rest of the code) */}
    </div>
  );
};

export default WhatIsBhoomi;
