import React from 'react';

export default function Employee(props) {
      // by RazmanR, date 26/11/2023

    // Employee data
    // ORIGINAL JSON data from this url
 let employeeData = {
        "id": 1001,
        "imageUrl": "https://hub.dummyapis.com/Image?text=JB&height=120&width=120",
        "firstName": "Josue",
        "lastName": "Barton",
        "email": "Josue.Barton@dummyapis.com",
        "contactNumber": "4797598362",
        "age": 78,
        "dob": "02/09/1945",
        "salary": 1,
        "address": "Address1"
      };
 
    return (  <td>
        {props.row[props.column]}</td>);
}
       
     