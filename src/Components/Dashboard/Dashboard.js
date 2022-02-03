import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faUser,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import DashboartChart from "./DashboartChart";
import SalesTable from "./SalesTable";
import { userContext } from "../../App";

const Dashboard = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  return (
    <div>
      <p>{loggedInuser.name}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-5">
        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-xl p-5 bg-green-600">
                <FontAwesomeIcon className="fa-2x fa-inverse" icon={faWallet} />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">
                Total Revenue
              </h2>
              <p className="font-bold text-3xl">
                $3249{" "}
                <span className="text-green-500">
                  <i className="fas fa-caret-up"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-xl p-5 bg-pink-600">
                <FontAwesomeIcon className="fa-2x fa-inverse" icon={faWallet} />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Total Cost</h2>
              <p className="font-bold text-3xl">$ 249</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-xl p-5 bg-blue-600">
                <FontAwesomeIcon
                  className="fa-2x fa-inverse"
                  icon={faMoneyBill}
                />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Total Due</h2>
              <p className="font-bold text-3xl">152 days</p>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-xl p-5 bg-yellow-600">
                <FontAwesomeIcon className="fa-2x fa-inverse" icon={faUser} />
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">
                Total customers
              </h2>
              <p className="font-bold text-3xl">
                2{" "}
                <span className="text-yellow-600">
                  <i className="fas fa-caret-up"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10">
        <div className="m-auto">
          <p className="text-center p-2 font-bold">Revenue Graph</p>
          <DashboartChart />
        </div>
        <div className="m-auto">
          <p className="text-center p-2 font-bold">Product Selling Graph</p>
          <DashboartChart />
        </div>
      </div>
      <div className="p-5">
        <p className="text-center p-2 font-bold mb-5">Recent Sales</p>
        <SalesTable />
      </div>
    </div>
  );
};

export default Dashboard;
