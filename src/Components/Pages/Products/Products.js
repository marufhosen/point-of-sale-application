import axios from "axios";
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
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../Layout/Footer";

const Products = () => {
  // const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  const [getProductFromDB, setGetProductFromDB] = useState({});
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({ email: loggedInuser.email });

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const habdleOnChange = (e) => {
    const getProduct = { ...product };
    getProduct[e.target.name] = e.target.value;
    setProduct(getProduct);
  };

  //get Producy from api
  useEffect(() => {
    axios
      .get(
        "https://point-of-sale-319.herokuapp.com/product/getProducts?email=" +
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
          setGetProductFromDB(response.data.result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  //post products
  const handleSubmit = (e) => {
    axios
      .post(
        "https://point-of-sale-319.herokuapp.com/product/addProducts?email=" +
          loggedInuser.email,
        product,
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
    console.log(product);
    e.preventDefault();
  };

  // console.log("hit products", product);

  return (
    <div>
      <div className="w-11/12 m-auto h-full min-h-screen">
        <div className="my-5">
          <button
            onClick={handleClickOpen}
            className="flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            <FontAwesomeIcon className="fa-inverse" icon={faCartPlus} />
            <span className="mx-1">Add Product</span>
          </button>
        </div>
        <div className={"" + (open ? "" : "hidden")}>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-2/4 m-auto my-12 bg-blue-50 p-24 rounded-lg"
          >
            <div className="text-center font-bold text-lg">POINT OF SALE</div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Product Name
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="productName"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Price
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="price"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Sell Price
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="number"
                name="sellPrice"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Unit
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="unit"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Stock
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="stock"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-800">
                Product Details
              </label>
              <input
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                name="detail"
                required
                onChange={habdleOnChange}
              />
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                UPLOAD PRODUCT
              </button>
            </div>
          </form>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Sell Price</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Actios</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getProductFromDB.length &&
                getProductFromDB.map((pd) => (
                  <TableRow
                    key={pd._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {pd._id}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {pd.productName}
                    </TableCell>
                    <TableCell align="right">{pd.price}</TableCell>
                    <TableCell align="right">{pd.sellPrice}</TableCell>
                    <TableCell align="right">{pd.unit}</TableCell>
                    <TableCell align="right">{pd.stock}</TableCell>
                    <TableCell align="right">{pd.date.split("T")[0]}</TableCell>
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

export default Products;
