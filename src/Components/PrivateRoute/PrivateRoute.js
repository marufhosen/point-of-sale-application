import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { userContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  // const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  // const isAuthentic = true;
  let location = useLocation();
  if (loggedInuser.success) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
