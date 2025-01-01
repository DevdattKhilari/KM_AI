import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

function Faq() {
  return (
    <>
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full   ">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center">
          <a
            href="/"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md mr-4  hover:scale-110 duration-200 "
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 font-bold hover:scale-110 duration-200 "
          >
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md  hover:scale-110 duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center min-h-screen bg-green-100 py-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
          <h2 className="text-3xl font-semibold text-green-600 mb-6 text-center">
            Frequently Asked Questions (FAQ)
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="bg-green-500 text-white p-4 rounded-lg mb-2 hover:bg-green-600">
                What type of crops are predicted for my area?
              </AccordionTrigger>
              <AccordionContent className="bg-green-50 text-gray-700 p-4 rounded-lg shadow-md">
                Our system predicts the most suitable crops based on soil
                conditions, climate, and seasonal patterns. It suggests options
                like wheat, rice, maize, etc.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="bg-green-500 text-white p-4 rounded-lg mb-2 hover:bg-green-600">
                How can I optimize fertilizer usage for better yields?
              </AccordionTrigger>
              <AccordionContent className="bg-green-50 text-gray-700 p-4 rounded-lg shadow-md">
                Based on soil testing, our system recommends the right amount of
                fertilizer (e.g., nitrogen, phosphorous, potassium) and provides
                schedules for optimal results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="bg-green-500 text-white p-4 rounded-lg mb-2 hover:bg-green-600">
                Can I monitor soil health through the platform?
              </AccordionTrigger>
              <AccordionContent className="bg-green-50 text-gray-700 p-4 rounded-lg shadow-md">
                Yes, our platform offers real-time monitoring of soil health
                with data on pH levels, moisture, and nutrient content to help
                you make informed decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="bg-green-500 text-white p-4 rounded-lg mb-2 hover:bg-green-600">
                How accurate are the crop predictions and fertilizer
                recommendations?
              </AccordionTrigger>
              <AccordionContent className="bg-green-50 text-gray-700 p-4 rounded-lg shadow-md">
                Our predictions are based on advanced machine learning
                algorithms and data from local weather patterns, making them
                highly accurate and reliable.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Faq;
