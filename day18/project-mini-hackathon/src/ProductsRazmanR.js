// by RazmanR, Team3 date 14/1/24
// minihackathon assignment-
//  mobile phone gagdet web app

import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';



let jsonData = {
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
      ]
    }
  ]
}


//  {/* // to add to navbar  */}
// to show Products page
//  <li class="nav-item">
//  <a class="nav-link" href="http://localhost:3000/products"> View More BUTTON </a>
// </li>


// REST  api 
// http://localhost:3001/products/1


// <div>App
//     
//        in App.js
//       note: call this codes below, where you want to 
//     VIEW Products in your App or Home page  

//       {
//         <Products />

//       }
//      
//     </div>

export default function Products(props) {
  // by RazmanR, Team3 date 14/1/24
  // minihackathon assignment-
  //  mobile phone gagdet web app

  const [listE, setlistE] = useState([{}])
  let link = "";
  link = `https://dummyjson.com/products/`


  useEffect(() => {
    // now getting the api
    fetchData();


  }, []);


  const fetchData = async () => {

    try {
      // null is specifically used in async() function when calling and getting API data

      // use backticks  (`https://api-url.com`)

      let link = "";
      let prods = [];

      link = `https://dummyjson.com/products/`
      // link = `https://dummyjson.com/products/1`

      // const response = await fetch(link);

      const response = await axios.get(link);
      // {mode:'no-cors'}

      // (`https://api.github.com/users/${username}`);


      // array list[]

      const data = await response.data;
      // await response.json();

      console.log("data== ", data);

      prods = data.products;

      // get 10 product items
      console.log(prods.slice(0, 10));
      prods = prods.slice(0, 10);
      setlistE(prods);   // (data)
      // setlistE(data.products[0]);   // (data)
    } catch (err) {

      console.log("Error message=  ", err);
    }
  }


  function getData(params) {
    console.log("go fetchData== ");
    fetchData();
  }

  return (
    <div>
      {console.log("props.prod", props.prod)}

      {/* <button onClick={() => getData(1)}> GET products </button> */}

      {/* {console.log(listE)} */}
      <div onClick={() => getData(1)}>
        <h3 class="text-center  btn-outline-secondary" alt="click here">
          Buy our Products! We have One for You</h3>
      </div>

      <div class="container">
        <div class="row">

          <div className="card-columns">
            <div class="container">
              <div class="row">
               
                {
                  listE.map((prod) =>
                  (
                    Product(prod)
                  )
                    // <Product prod={prod}  /> 
                    //  next version, as separate Component  file

                  )

                }
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )

};


function Product(data) {
  return (
    <>
                {/* separator   */}
      <div class="col-md-1 ml-auto h-auto  "> </div>

      <div className="card product col-md-5 ml-auto h-auto ">
        <img
          className="image-top center  p-3 "
          src={data.thumbnail}
          // src="image/card2.pSng"
          alt="" />
        <div className="card-body">
          <h5 className="card-title text-center"> {data.title} </h5>
          <p className="text-justify lead">
            {data.description}

          </p>
          <br />

          {/*  */}
          <div id="btn2">


            {/* https://dummyjson.com/products/1 */}


            {/* get api here  */}
            <div hidden="true">
              {data.id}
            </div>
            <a href="http://localhost:3001/products/1">
              <button className="btn btn-outline-info text-center">

                <b> {"RM " + data.price + ".00"} </b>
              </button>
            </a>


          </div>
        </div>
      </div>
    </>
  );
}

