import React from 'react'
import "./App2.css";
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Services from './Services';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutus from './Aboutus';
import MathNums from './MathNums';
import SubstringMod from './SubstringMod';
import ListMod from './ListMod';
import TableMod from './TableMod';



export default function App2() {
  // by RazmanR 19/11/23 "Day 6- React assignment"
  let linkPageView = "#page-view";

  return (


    // "htmlll"

    <div>
      by RazmanR

      App2
      {/* <img src="./mech1.jpg" >   </img>
      <img src="" alt="">  </img> */}

      {/* npm i react-router-dom */}

      <div>

        <title>App2 RazmanR title</title>
      </div>

      {/* HAVE TO WRITE ALL THIS IN DIV,
      SO NO ERROR; */}

      {/* class components and functional COMPONENTS */}


<hr />
<Home />

      {/* CLICK onlines services */}
      <div className='b1'>
        <div class="w3-row w3-padding-64" id="onlineServices">
          <div class="w3-col l6 w3-padding-large">
            <h1 class="w3-center">{ }</h1><br />

            {/* <hr /> */}

            {/* <!-- Menu links Section --> */}
            <div class="w3-col w3-padding-64" id="menu">
              <div class="w3 l6 w3-padding-large">
                <h1 class="w3-center">Our Online Services</h1><br />

                <div class="w3-right"><img src="iconB.png" class="w3-round  w3-opacity-min" alt="Menu" />
                </div>

                <h2>
                  Pick your Service Function for the Day! </h2>

                <br />

                {/* <!-- OnlineCodeApp.js REACTJS;; --> */}

          

                {/* <!-- class="code-font-type" like coding font ;
        pictures on the right; --> */}
                <p class="w3-code"> CODE STYLE: Function(1+2);   print("Assortment of fresh baked fruit breads and muffins 5.50");</p>
                <br />


                {/* "/mathnums#page-view" */}

          <b>   GO TO VIEW ==   </b>

 

                <tr>
                  < div  >
                    <img src="codes-icon-png360.jpg" alt="Codes" class="w3-image icon" />
                    <h4><a href={linkPageView} > Service MathNums() Module </a>   </h4>
                    <p class="w3-text-grey w3-large"> Function: Mathematical operators on numbers.</p> <br />

                  </div>

                  < div  >
                    <img src="codes-icon-png360.jpg" alt="Codes" class="w3-image icon" />
                    <h4><a href={linkPageView}> Service Substring() Module </a> </h4>
                    <p class="w3-text-grey w3-large">
                      Function: Reverses string.</p><br />
                  </div>



                  {/* < div class="w3-col" > */}
                  {/* < div class="w3-row" > */}
                  < td  >
                    <img src="codes-icon-png360.jpg" alt="Codes" class="w3-image icon" />
                    <h4><a href={linkPageView}> Service Table() Module </a> </h4>
                    <p class="w3-text-grey w3-large"> Function: Shows a Table of data. </p><br />
                  </td>

                  {/* < div class="w3-col" > */}
                  <td>
                    <img src="codes-icon-png360.jpg" alt="Codes" class="w3-image icon" />
                    <h4><a href={linkPageView}> Service List() Module </a> </h4>
                    <p class="w3-text-grey w3-large"> Function: Shows a bullet point List of data.
                    </p><br />
                  </td>

                </tr>

              </div>
            </div>

            <div >   {"--"}  <h1 id="page-view">   Page View  </h1></div>
            <b>

              NAVBAR ON TOP {" => "}CLICK a SERVICE MODULE
            </b>


            {/* <div>
              <h1 id='page-view'>   Page View  </h1>
            </div> */}

            {/* <div class="w3-top">
          <div class="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: "4px" }}  > */}


            {/* REACTJS PAGES TO LINKS */}
            <Router  >
              <Navbar />

              <Routes >
              <Route path='/aboutus' element={<Aboutus />}  >  </Route>
              {/* <Route path='/' element={<Home />}  >  </Route> */}
                <Route path='/' element={<Aboutus />}  >  </Route>
                <Route path='/services' element={<Services />}  >  </Route>
                <Route path='/mathnums' element={<MathNums />}  >  </Route>
                <Route path='/substring' element={<SubstringMod />}  >  </Route>
                <Route path='/listmod' element={<ListMod />}  >  </Route>
                <Route path='/tablemod' element={<TableMod />}  >  </Route>

             
              </Routes>

            </Router>
            {/* </div>
        </div> */}

          </div>
        </div>




        {/* <div className=s'b1'>  */}
        {/* </div> */}

        <Footer />
        {console.log("WEBaPP is running... ")}







        {/* <h1 style={{
        color: "red", fontSize: "40px",
        textAlign: "center"
      }}> */}

        {/* <div>  
      <h1>  THIS IS  my 1ST heading</h1>
      <h2>This is 2ND  react heading      loreM      </h2>
</div> */}
        {console.log("tryy log")}
      </div>
    </div>


  )
}



