// Home.js

import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <h1 hidden="1" >      Navigation        </h1>
      <div class="w3-top">
        <div class="w3-bar w3-white w3-padding w3-card" style={{ letterSpacing: "4px", maxHeight: "155px" }}  >

          <div className='container'>
            <ol>
            </ol>
          </div>
          <div class="w3-right w3-hide-small">
            by RazmanR   19/11/23
            "Day 6- React assignment"

            <table>
              <tr>
                <th class="w3-bar-item w3-button">
                  <a href='#home'  >
                    HOME</a> </th>

                {/* <  Link to={'/'}  >Home</Link>  */}

                <th class="w3-bar-item w3-button">
                  <a href='#onlineServices'  >
                    Our Online Services</a>

                </th>

                <th class="w3-bar-item w3-button">
                  <  Link to={'/aboutus'}  >Contact Us</Link> </th>

                <th class="w3-bar-item w3-button"
                >
                  <  Link to={'/services'}  >Get Your Rewards!</Link>
                </th>

              </tr>
            </table>



            <th class="w3-bar-item w3-button">      <b>   Click and go HERE {"=>"}
            </b>     <  Link to={'/mathnums'}  >MathNums Module  </Link> </th>

            <th class="w3-bar-item w3-button">     <  Link to={'/substring'}  >SubstringModule</Link> </th>
            <th class="w3-bar-item w3-button">
              <  Link to={'/tablemod'}  >Table Module</Link> </th>
            <th class="w3-bar-item w3-button">
              <  Link to={'/listmod'}  >List Module</Link> </th>

          </div>

        </div>
      </div>

    </div>
  )
}
