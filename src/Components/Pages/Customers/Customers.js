import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer from "../../Layout/Footer";

const Customers = () => {
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  const [getCustomerFromDB, setGetCustomerFromDB] = useState({});

  const [open, setOpen] = useState(false);
  const [customer, setCustomer] = useState({
    companyEmail: loggedInuser.email,
  });

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const habdleOnChange = (e) => {
    const getCustomer = { ...customer };
    getCustomer[e.target.name] = e.target.value;
    setCustomer(getCustomer);
  };

  //get customers from api
  useEffect(() => {
    axios
      .get(
        "https://point-of-sale-319.herokuapp.com/customer/getCustomers?email=" +
          loggedInuser.email,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then(
        (response) => {
          setGetCustomerFromDB(response.data.result);
          // setGetProductFromDB("hit dash",response.data.result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  // add customer api
  const handleCustomerSubmit = (e) => {
    axios
      .post(
        "https://point-of-sale-319.herokuapp.com/customer/addCustomers?email=" +
          loggedInuser.email,
        customer,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then(
        (response) => {
          console.log("db respons", response);
        },
        (error) => {
          console.log(error);
        }
      );
    console.log("Hit Customer", customer);
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-11/12 m-auto min-h-screen">
        <div className="my-5">
          <button
            onClick={handleClickOpen}
            className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <FontAwesomeIcon className="fa-inverse" icon={faUser} />
            <span className="mx-1">Add Customer</span>
          </button>
        </div>
        <div className={"" + (open ? "" : "hidden")}>
          <form
            onSubmit={handleCustomerSubmit}
            className="w-full md:w-2/4 m-auto mb-12 bg-blue-50 px-5 py-4 rounded-lg"
          >
            <div className="text-center font-bold text-lg">POINT OF SALE</div>
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Customer Name
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="customerName"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Phone Number
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="phone"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Email
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="email"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Address
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="address"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Due Amount
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="due"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                UPLOAD CUSTOMER
              </button>
            </div>
          </form>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Customer Name</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
                <TableCell align="right">Due</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCustomerFromDB.length &&
                getCustomerFromDB.map((cd) => (
                  <TableRow
                    key={cd._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {cd._id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {cd.customerName}
                    </TableCell>
                    <TableCell align="right">{cd.phone}</TableCell>
                    <TableCell align="right">{cd.email}</TableCell>
                    <TableCell align="right">{cd.address}</TableCell>
                    <TableCell align="right">{cd.due}</TableCell>
                    <TableCell align="right">{cd.date}</TableCell>
                    <TableCell align="right">
                      <button className="px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        DELETE
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Customers;
