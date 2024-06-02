import React from "react";
import Employee from "./Employee";

// global exports
export const loading = "LOADING";

export function setLoading(loadingParams) {
  // LOADING MESSAGE
  loadingParams =
  {
    "id": 0,
    "firstName": loading,
    "contactNumber": loading,
    "dob": loading,
  };
  return loadingParams;
}

export default function TableComponent(props) {
  // by RazmanR, date 26/11/2023
  //default TableComponent

  // Table. with array of columns [] 
  // array of rows[] 
  // JsonObject of row{} data

  //"initialise" markers - remember to initialise values, where you see these parts. 

  //initialise  
  let tableData = {
    columns:
      ["id", "firstName", "contactNumber", "dob"],

    rows: [
      {
        "id": 0,
        "firstName": loading,
        "contactNumber": loading,
        "dob": loading,
      }

    ]
  }


  // setter
  function setRow(id, firstName, contactNumber, dob) {
    return { id, firstName, contactNumber, dob };

  }

  let dataColumns = [];
  let dataRows = [];
  let data = [{}];

  //initialise table
  data = tableData;
  console.log("tableData props===  ",
    typeof (props.data), props.data);
  // many rows[]  of json data

  console.log("tableData===  ", data);
  dataColumns = data.columns;
  dataRows = props.data;

  // Employee data.
  // add data Rows to table
  let tableBody = dataRows.map(row => {
    return (
      <tr>
        {dataColumns.map(column => {
          // pass props values
          return < Employee row={row} column={column} />
        })}
      </tr>
    )
  })

  // Update  Rename to proper Table Column Headers 
  //  for display in HTML

  //initialise  
  //Table Column Headers
  tableData.columns[0] = "Row No (#)";
  tableData.columns[1] = "First Name";
  tableData.columns[2] = "Contact Number";
  tableData.columns[3] = "Date of Birth";

  console.log("tableData2===  ", tableData);

  let tableHeaders = (
    <thead>
      <tr>
        {dataColumns.map(column => {
          return <th>{column}</th>
        })}
      </tr>
    </thead>
  )

  console.log(tableHeaders);
  console.log(tableBody);

  // table CSS applies here
  return (
    <div>
      <br />
      <table className="table table-bordered table-hover" width="100%">
        {tableHeaders}
        {tableBody}
      </table>  </div>
  )
}


