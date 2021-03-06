import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { userContext } from "../../../App";
import Footer from "../../Layout/Footer";

firebase.initializeApp(firebaseConfig);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  // const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handleOnChange = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 5;
      isFormValid = isPasswordValid;
    }
    if (isFormValid === true) {
      const newUser = { ...userInfo };
      newUser[e.target.name] = e.target.value;
      setUserInfo(newUser);
    }
  };

  const updateUserName = (name) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
      })
      .catch((error) => {
        // An error occurred
      });
  };

  const handleSubmit = (e) => {
    if (newUser && userInfo.email && userInfo.password) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateUserName(userInfo.name);
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          // ..
        });
    }
    if (!newUser && userInfo.email && userInfo.password) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((userCredential) => {
          const user = userCredential.user;
          const authenticUser = {
            name: user.displayName,
            email: user.email,
            success: true,
            error: "",
            loginSuccess: true,
          };
          if (user) {
            getIdToken(user).then((idToken) =>
              sessionStorage.setItem("token", idToken)
            );
          }
          setLoggedInUser(authenticUser);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="bg-white dark:bg-gray-700 h-full pb-10 pt-12">
        <div className="w-5/6 mx-auto overflow-hidden dark:bg-gray-800 rounded-lg shadow-xl lg:max-w-md">
          <div className="w-full px-6 py-8 md:px-8">
            <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white">
              Point of sale
            </h2>

            <p className="text-sm text-center text-gray-600 dark:text-gray-200">
              Start your journey
            </p>

            <Link
              to=""
              className="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <div className="px-4 py-2">
                <svg className="w-6 h-6" viewBox="0 0 40 40">
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                    fill="#1976D2"
                  />
                </svg>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </Link>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <p className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
                or signin with email
              </p>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form onSubmit={handleSubmit}>
              {newUser && (
                <div className="mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="name"
                    required
                    onChange={handleOnChange}
                  />
                </div>
              )}
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="email"
                  required
                  onChange={handleOnChange}
                />
                {!newUser && (
                  <span className="text-gray-500 text-sm">
                    Demo Email: demo.example@gmail.com
                  </span>
                )}
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                </div>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  name="password"
                  required
                  onChange={handleOnChange}
                />
                {!newUser && (
                  <span className="text-gray-500 text-sm">
                    Demo Pass: 123456
                  </span>
                )}
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                >
                  {newUser ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

              <p
                onClick={() => setNewUser(!newUser)}
                className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline cursor-pointer"
              >
                Don't have account? sign up
              </p>

              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
