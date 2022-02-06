import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const SalesTable = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Unit</TableCell>
            <TableCell align="right">Main Price</TableCell>
            <TableCell align="right">Product Quantity</TableCell>
            <TableCell align="right">Sell Amount</TableCell>
            <TableCell align="right">Due</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.invoices.map((iv) => (
            <TableRow
              key={iv._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {iv.invoiceDate.split("G")[0]}
              </TableCell>
              <TableCell component="th" scope="row">
                {iv.customerName}
              </TableCell>
              <TableCell align="right">{iv.customerEmail}</TableCell>
              <TableCell align="right">{iv.phone}</TableCell>
              <TableCell align="right">{iv.productName}</TableCell>
              <TableCell align="right">{iv.productUnit}</TableCell>
              <TableCell align="right">{iv.productPrice}</TableCell>
              <TableCell align="right">{iv.productQuantity}</TableCell>
              <TableCell align="right">{iv.totalPrice}</TableCell>
              <TableCell align="right">{iv.totalDue}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SalesTable;
