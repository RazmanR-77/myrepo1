import React, { useState } from 'react';
import TableComponent, { setLoading } from './TableComponent';

export default function SearchPage() {
  // by RazmanR, date 26/11/2023

  // -FEATURES/FUNCTIONS of this SearchPage App and codes  :
    // -click GET button and shows Loading  
    // -fetches data from API and shows the Employee User information 
    // -fetches and refreshes dynamic list of data
    // -able to run with HTML files PACKAGE only, as an option.
  // passes props values to child Component
  // codes with enhanced Readbility

  // -React Components :
  // SearchPage 
  // TableComponent 
  // Employee


  // ORIGINAL JSON data from this API url
  // let empl = {
  //   "id": 1001,
  //   "imageUrl": "https://hub.dummyapis.com/Image?text=JB&height=120&width=120",
  //   "firstName": "Josue",
  //   "lastName": "Barton",
  //   "email": "Josue.Barton@dummyapis.com",
  //   "contactNumber": "4797598362",
  //   "age": 78,
  //   "dob": "02/09/1945",
  //   "salary": 1,
  //   "address": "Address1"
  // };

  // parameter for API URL
  const [employeeD, setEmployeeD] = useState('');
  const [listE, setListE] = useState([]);  //array list[ ]

  const fetchData = async () => {
    // -fetches data from API and shows the Employee User information 

    try {
      // null is specifically used in async() function when calling and getting API data

      // use backticks  (`https://api-url.com`)
      const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001`
      );
      // {mode:'no-cors'}

      // array list[] of fetched JSON datas 
      const data = await response.json();
      setListE(data);
    } catch (err) {

      console.log("Error message==  ", err);
    }
  }

  function getData(rows) {
    // fetch and get data rows from API

    let initial = {};
    initial = setLoading(initial);
    rows = [initial];
    fetchData();
    setListE(rows);

  }

  return (
    <div>
      {/* SearchPage */}
      by RazmanR -     Day8AssignReactjs   
      <br />
         {console.log("listE=== ", listE)}
 
      <button onClick={() => getData([1])}> GET EMPLOYEES </button>

      <div>
        <br />
        {/* <table style={{ innerWidth: 100 }} > */}
        <table  >
          <div id="table-component">
            {(listE.length > 0) ?
              <b>  EMPLOYEES USER INFORMATION - FETCHED</b> : "Please Click GET. Loading..."}

            {/* // passes props values to child Component */}
            <TableComponent data={listE} />
          </div>

        </table>
      </div>
    </div>
  )
}

 