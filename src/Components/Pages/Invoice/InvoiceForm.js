import axios from "axios";
import React, { useContext, useState } from "react";
import { userContext } from "../../../App";

const InvoiceForm = (props) => {
  const { user } = useContext(userContext);
  const [loggedInuser, setLoggedInUser] = user;
  const [postInvoice, setPostInvoice] = useState({});
  const {
    companyEmail,
    customerName,
    customerEmail,
    phone,
    address,
    productName,
    productUnit,
    productPrice,
    sellPrice,
    productQuantity,
    totalPrice,
    totalDue,
    invoiceDate,
  } = props.invoice;

  const handleInvoicePost = () => {
    axios
      .post(
        "https://point-of-sale-319.herokuapp.com/invoice/addInvoice?email=" + loggedInuser.email,
        props.invoice,
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
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-4/5 bg-white shadow-lg">
          <div className="flex justify-between p-4">
            <div>
              <h6 className="font-bold">
                Order Date :{" "}
                <span className="text-sm font-medium">{invoiceDate}</span>
              </h6>
            </div>
            <div className="w-40">
              <p className="text-sm">
                <span className="font-bold"> From : </span>
                <br />
                <span>{loggedInuser.name}</span>
                <br />
                <span>Email: {companyEmail}</span>
                <br />
              </p>
            </div>
            <div className="w-40">
              <p className="text-sm">
                <span className="font-bold"> To : </span>
                <br />
                <span>Name:{customerName}</span>
                <br />
                <span>Email:{customerEmail}</span>
                <br />
                <span>Phone:{phone}</span>
                <br />
                <span>Address:{address}</span>
              </p>
            </div>
            <div></div>
          </div>
          <div className="flex justify-center p-4">
            <div className="border-b border-gray-200 shadow">
              <table className="">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-xs text-gray-500 ">#</th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Product Name
                    </th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Quantity
                    </th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">Price</th>
                    <th className="px-4 py-2 text-xs text-gray-500 ">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">1</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">{productName}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">
                        {productQuantity}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {sellPrice}
                    </td>
                    <td className="px-6 py-4">{totalPrice}</td>
                  </tr>
                  <tr className="">
                    <td colSpan="3"></td>
                    <td className="text-sm font-bold">Sub Total</td>
                    <td className="text-sm font-bold tracking-wider">
                      <b>{totalPrice}</b>
                    </td>
                  </tr>
                  <tr className="">
                    <td colSpan="3"></td>
                    <td className="text-sm font-bold">Due</td>
                    <td className="text-sm font-bold tracking-wider">
                      <b>{totalDue}</b>
                    </td>
                  </tr>
                  <tr className="text-white bg-gray-800">
                    <th colSpan="3"></th>
                    <td className="text-sm font-bold">
                      <b>Total</b>
                    </td>
                    <td className="text-sm font-bold">
                      <b>{totalPrice - totalDue}</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between p-4">
            <div>
              <h3 className="text-xl">Terms And Condition :</h3>
              <ul className="text-xs list-disc list-inside">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta, illum!
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta, illum!
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Soluta, illum!
                </li>
              </ul>
            </div>
            <div className="p-4">
              <h3>Signature</h3>
              <div className="text-xl text-indigo-500">{loggedInuser.name}</div>
            </div>
          </div>
          <div className="w-full h-0.5 bg-indigo-500"></div>

          <div className="p-4">
            <div className="flex items-center justify-center">
              Thank you very much for doing business with us.
            </div>
            <div className="flex items-end justify-end space-x-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-sm text-green-600 bg-green-100"
              >
                Print
              </button>
              <button
                onClick={handleInvoicePost}
                className="px-4 py-2 text-sm text-blue-600 bg-blue-100"
              >
                Save
              </button>
              <button className="px-4 py-2 text-sm text-red-600 bg-red-100">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;
