"use strict";
exports.__esModule = true;
var React = require("react");
var Table_1 = require("@mui/material/Table");
var TableBody_1 = require("@mui/material/TableBody");
var TableCell_1 = require("@mui/material/TableCell");
var TableContainer_1 = require("@mui/material/TableContainer");
var TableHead_1 = require("@mui/material/TableHead");
var TableRow_1 = require("@mui/material/TableRow");
var Paper_1 = require("@mui/material/Paper");
var slide_1 = require("./slide");
var index_1 = require("../index");
var headers = ['Institution', 'Amount', 'Total'];
var alignTableHeader = function (i) { return (i > 0 ? 'center' : 'left'); };
var tableContainerStyle = function () { return ({
    display: 'flex',
    justifyContent: 'center',
    border: '1 solid lightgrey',
    maxWidth: 700
}); };
/**
 * BasicTable is used as the body of the index.tsx layout
 */
function BasicTable() {
    var resources = React.useContext(index_1.Context);
    var data = resources[1];
    return (<TableContainer_1["default"] sx={tableContainerStyle} component={Paper_1["default"]}>
      <Table_1["default"] sx={{ minWidth: 350, maxWidth: 700 }} aria-label="simple table">
        <TableHead_1["default"]>
          
          <TableRow_1["default"]>
            {headers.map(function (e, i) { return (<TableCell_1["default"] key={i} align={alignTableHeader(i)}>{e}</TableCell_1["default"]>); })}
          </TableRow_1["default"]>
        </TableHead_1["default"]>
        <TableBody_1["default"]>
          {data.map(function (row, i) { return (<TableRow_1["default"] key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              
              <TableCell_1["default"] component="th" scope="row">
                {row.name}
              </TableCell_1["default"]>
              
              <TableCell_1["default"] align="right">
              <index_1.Context.Provider value={resources}>
                <slide_1["default"] key={i} row={row}/>
                </index_1.Context.Provider>
              </TableCell_1["default"]>
              
              <TableCell_1["default"] align="right">{row.value}</TableCell_1["default"]>
            </TableRow_1["default"]>); })}
        </TableBody_1["default"]>
      </Table_1["default"]>
    </TableContainer_1["default"]>);
}
exports["default"] = BasicTable;
