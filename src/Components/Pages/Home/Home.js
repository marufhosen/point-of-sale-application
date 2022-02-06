import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../App";
import Footer from "../../Layout/Footer";

const Home = () => {
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
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
              {loggedInuser.success ? (
                <button
                  onClick={() => navigate("/dashboard")}
                  className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                >
                  GO DASHBOARD
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                >
                  DEMO LOGIN
                </button>
              )}
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
      <div>
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Benefits of
              <span className="text-blue-500"> Point of Sale </span>
            </h1>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Product Management
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Product management is an organizational function within a
                  company dealing with new products, business justification,
                  planning, verification, forecasting, pricing.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Sales Management
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Sales management software is designed to help salespeople get
                  organized by helping them manage their contacts, track sales
                  deals, and ultimately reduce time spent on admin.
                </p>
              </div>

              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                  Customer Management
                </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  A good retail management system will have a pared-down CRM, or
                  customer manager, as a part of its solution, so that you can
                  track all your customer data.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="bg-white dark:bg-gray-800 py-8">
          <div className="container px-6 py-8 mx-auto">
            <div className="items-center lg:flex">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  ABOUT DEVELOPER
                </h2>

                <p className="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  Hi, i'm MARUF HOSEN. I'm a dynamic web application developer
                  who likes working with JavaScript. I have experience working
                  with e-commerce and POS applications. I am an adaptive
                  developer who is interested in learning technology according
                  to demand.
                </p>

                <div className="flex items-center mt-6 -mx-2">
                  <a
                    className="mx-2"
                    href="https://www.linkedin.com/in/maruf-hosen-239028179/"
                    aria-label="Linkden"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                    </svg>
                  </a>

                  <a
                    className="mx-2"
                    href="https://github.com/marufhosen"
                    aria-label="Github"
                  >
                    <svg
                      className="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="max-w-lg">
                    <img
                      className="object-cover object-center w-full h-64 rounded-md shadow"
                      src="https://media.istockphoto.com/photos/faceless-man-in-hoodie-standing-isolated-on-black-picture-id916306960?b=1&k=20&m=916306960&s=170667a&w=0&h=jVVldOMhDwhSirQNhyT3qOtJ2-Mi93UcYwIRfGzNjY0="
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
