import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Auth/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";
import Products from "./Components/Pages/Products/Products";
import NavBar from "./Components/Layout/NavBar";
import { createContext, useState } from "react";
import Profile from "./Components/Pages/Profile/Profile";
import AddProducts from "./Components/Pages/Products/AddProducts";

export const userContext = createContext();

function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loggedInuser, setLoggedInUser]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
