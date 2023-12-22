// Home.js

import React from 'react'

export default function Aboutus() {
  return (
    <div>
      {/* About Us: Contact */}
 
 {/* <!-- Contact Section --> */}
    <div class="w3-container w3-padding-64" id="contact">
      <h1>About Us: Contact</h1><br/>

    
      <p>We offer online coding education and training services catering for any organisations, large or small. We understand your needs and we will cater 
      to meet the most important criteria of them all. Do not hesitate to contact us.</p>
      <p class="w3-text-blue-grey w3-large"><b>Online Coding Academy,  42 Jalan Living St, 43043 Kuala Lumpur, Malaysia</b></p>
      <p>You can also contact us by phone 03553123-2323 or email online@coding.com, or you can send us a message
        here:</p>
  
      <b> How many people are interested? </b>
      <form action="/action_page.php" target="_blank">
        <p><input class="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name"/></p>
        <p><input class="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People"/></p>
        <p><input class="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date"
            value="2020-11-16T20:00"/></p>
        <p><input class="w3-input w3-padding-16" type="text" placeholder="Message \ Special requirements" required
            name="Message"/></p>
        <p><button class="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
      </form>
    </div>

    </div>
  )
}
