import React, { useContext } from "react";
import { userContext } from "../../../App";
import Footer from "../../Layout/Footer";

const Profile = () => {
  // const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  return (
    <div>
      <div className="min-h-screen">
        <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 m-auto bg-blue-100">
          <img
            alt="img"
            src="https://news.tradimo.com/wp-content/uploads/2019/11/technicalanalysis.jpg"
            className="w-full"
          />
          <div className="flex justify-center -mt-8">
            <img
              alt="img"
              src="https://www.w3schools.com/howto/img_avatar.png"
              className="rounded-full border-solid w-28 h-28 border-white border-2 -mt-3"
            />
          </div>
          <div className="text-center px-3 pb-6 pt-2">
            <h3 className="text-gray-700 text-sm bold font-sans">
              {loggedInuser.name}
            </h3>
            <p className="mt-2 font-sans font-light text-black">
              Email: {loggedInuser.email}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
