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
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";

function createData(sl, name, calories, fat, carbs, protein) {
  return { sl, name, calories, fat, carbs, protein };
}
const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData(3, "Eclair", 262, 16.0, 24, 6.0),
  createData(4, "Cupcake", 305, 3.7, 67, 4.3),
  createData(5, "Gingerbread", 356, 16.0, 49, 3.9),
];

const Products = () => {
  const [loggedInuser, setLoggedInUser] = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState({});
  const handleClickOpen = () => {
    setOpen(!open);
  };

  const habdleOnChange = (e) => {
    const getProduct = { ...product };
    getProduct[e.target.name] = e.target.value;
    setProduct(getProduct);
  };
  const handleSubmit = (e) => {
    // setOpen(!open);
    console.log(product);
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/dashboard/products?email=" + loggedInuser.email,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => console.log("Successfully Retrive"));
  }, [loggedInuser]);

  return (
    <div className="w-11/12 m-auto">
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
          className="w-full md:w-2/4 m-auto my-12 bg-blue-100 p-4 rounded-lg"
        >
          <div className="text-center p-2 font-bold text-lg">POINT OF SALE</div>
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
              type="text"
              name="price"
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
              <TableCell>SL</TableCell>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.sl}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;
