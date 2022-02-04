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
import Customers from "./Components/Pages/Customers/Customers";

export const userContext = createContext();

function App() {
  const [loggedInuser, setLoggedInUser] = useState({});
  const [getProductFromDB, setGetProductFromDB] = useState({});
  const [getCustomerFromDB, setGetCustomerFromDB] = useState({});
  return (
    <userContext.Provider
      value={{
        user: [loggedInuser, setLoggedInUser],
        products: [getProductFromDB, setGetProductFromDB],
        customers: [getCustomerFromDB, setGetCustomerFromDB],
      }}
    >
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
          />
          <Route
            path="/products"
            element={
              <PrivateRoute>
                <Products />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
