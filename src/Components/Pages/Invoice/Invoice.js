import React, { useState, useContext } from "react";
import axios from "axios";
import { userContext } from "../../../App";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InvoiceForm from "./InvoiceForm";
import Footer from "../../Layout/Footer";

const Invoice = () => {
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  const [open, setOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState({});
  const [searchCustomer, setSearchCustomer] = useState({});

  const [getSingleProduct, setGetSingleProduct] = useState([]);
  const [getSingleCustomer, setGetSingleCustomer] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [due, setDue] = useState(0);

  const [createInvoice, setCreateInvoice] = useState({});

  //get single products
  const handleSearchProduct = () => {
    axios
      .get(
        `https://point-of-sale-319.herokuapp.com/product/getSingleProducts?name=${searchProduct}&email=` +
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
          setGetSingleProduct(response.data.result);
        },
        (error) => {
          console.log(error);
        }
      );
    // console.log(getSingleProduct);
  };

  // get single customer
  const handleSearchCustomer = () => {
    axios
      .get(
        `https://point-of-sale-319.herokuapp.com/customer/getSingleCustomers?name=${searchCustomer}&email=` +
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
          setGetSingleCustomer(response.data.result);
        },
        (error) => {
          console.log(error);
        }
      );
    // console.log(getSingleCustomer);
  };

  const handleCreateInvoice = () => {
    const invoiceList = {
      companyEmail: getSingleCustomer.companyEmail,
      customerName: getSingleCustomer.customerName,
      customerEmail: getSingleCustomer.email,
      phone: getSingleCustomer.phone,
      address: getSingleCustomer.address,
      productName: getSingleProduct.productName,
      productUnit: getSingleProduct.unit,
      productPrice: getSingleProduct.price,
      productQuantity: quantity,
      sellPrice: getSingleProduct.sellPrice,
      totalPrice: getSingleProduct.sellPrice * quantity,
      totalDue: due,
      invoiceDate: new Date().toString(),
    };
    setCreateInvoice(invoiceList);
    setOpen(!open);
    // console.log(invoiceList);
  };
  return (
    <div>
      <div className="min-h-screen">
        <div className="py-5 text-center font-bold text-2xl">
          <p>Create Invoice</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search Products */}
          <div className="w-4/6 m-auto">
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Product Name
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="productName"
                required
                onChange={(e) => setSearchProduct(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                onClick={handleSearchProduct}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                SEARCH PRODUCT
              </button>
            </div>
            {/* <h1>Product Detail</h1> */}
            {getSingleProduct && (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>SL</TableCell>
                      <TableCell align="right">Product Name</TableCell>
                      <TableCell align="right">Unit</TableCell>
                      <TableCell align="right">Price</TableCell>
                      <TableCell align="right">Sell Price</TableCell>
                      <TableCell align="right">Quantity</TableCell>
                      <TableCell align="right">Total price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        01
                      </TableCell>
                      <TableCell align="right">
                        {getSingleProduct.productName}
                      </TableCell>
                      <TableCell align="right">
                        {getSingleProduct.unit}
                      </TableCell>
                      <TableCell align="right">
                        {getSingleProduct.price}
                      </TableCell>
                      <TableCell align="right">
                        {getSingleProduct.sellPrice}
                      </TableCell>
                      <TableCell align="right">
                        <input
                          className="px-1 py-1 w-16 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                          type="number"
                          name="quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </TableCell>
                      <TableCell align="right">
                        {getSingleProduct.sellPrice * quantity || 0}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </div>

          {/* Searcj Customers */}
          <div className="w-4/6 m-auto">
            <div className="">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Customer Name
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="customerName"
                required
                onChange={(e) => setSearchCustomer(e.target.value)}
              />
            </div>
            <div className="mt-4">
              <button
                onClick={handleSearchCustomer}
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                SEARCH CUSTOMER
              </button>
            </div>
            <div className="">
              {/* <h1>Product Detail</h1> */}
              {getSingleCustomer && (
                <div>
                  <div className="w-full shadow-xl p-8">
                    <p>Name: {getSingleCustomer.customerName}</p>
                    <p>Phone: {getSingleCustomer.phone}</p>
                    <p>Address: {getSingleCustomer.address}</p>
                    <div>
                      Due:{" "}
                      <input
                        className="px-4 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                        type="number"
                        name="due"
                        value={due}
                        onChange={(e) => setDue(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-8 m-auto w-1/2">
          <div>
            <button
              onClick={handleCreateInvoice}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Create Invoice
            </button>
          </div>
        </div>
        {open && <InvoiceForm invoice={createInvoice}></InvoiceForm>}
      </div>
      <Footer />
    </div>
  );
};

export default Invoice;
