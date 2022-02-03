import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-2xl font-semibold text-gray-800 uppercase lg:text-3xl">
                POINT OF SALE
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Turn your Retail Small Business into a Customer Focused, Profit
                Generating Machine.
              </p>
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Go to Dashboard
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-2xl"
              src="https://technofaq.org/wp-content/uploads/2019/01/word-image-48.jpeg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
