import React, { useRef } from 'react'
import './contactAlex.css';
import facebook from '../src/assets/facebook3.jpg';
import instagram from '../src/assets/instagram4.jpg';
import whatsapp from '../src/assets/whatsapp.png';
import emailjs from '@emailjs/browser'; //npm install @emailjs/browser --save

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jtjohyo', 'template_rt0u61p', form.current, '2MvhCLqA3y8XHe1zy')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contactPage'>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Us</h1>
            <span className="contactDesc">Feel free to send us a message</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="contactname" placeholder="Your Name" name='from_name' />
              <input type="email" className="contactemail" placeholder="Your Email" name='from_email' />
              <textarea className ="contactmsg" name="message" rows="5" placeholder="Your Message"></textarea> 
              <button type="submit" value="Send" className="submitBtn">Send Message</button>
              <div className="links">

                 <a href="https://www.facebook.com/">
                    <img src={facebook} alt="facebook" className="link" />
                  </a>
        
                <a href="https://www.instagram.com//">
                    <img src={whatsapp} alt="instagram" className="link" />
                  </a> 

                  <a href="https://www.instagram.com//">
                    <img src={instagram} alt="instagram" className="link" />
                  </a> 
              </div>
            </form>
        </div>
    </section>
  )
}
export default Contact