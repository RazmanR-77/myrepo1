import React from 'react';
import './styles_william.css';

class SupportPage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <h2>Get Support</h2>
        </div>
        <div className="container">
          <h3>Choose a topic</h3>
          <div className="row">
            <div className="col-sm-6">
              <div className="service">
                <h4><input type="checkbox" /> Battery Service</h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service">
                <h4><input type="checkbox" /> Cracked Screen(Front Only)</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="service">
                <h4><input type="checkbox" /> Cracked Screen(Back Only)</h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service">
                <h4><input type="checkbox" /> Camera Damage</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="service">
                <h4><input type="checkbox" /> Water or Liquid Damage</h4>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="service">
                <h4><input type="checkbox" /> On/Off/Volume Button Damage</h4>
              </div>
            </div>
          </div>
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputEmail4">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputName4">Name</label>
                <input type="text" className="form-control" id="inputName4" placeholder="Name" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input type="tel" className="form-control" id="inputPhoneNumber" placeholder="Phone Number" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPhoneModel">Phone Model</label>
                <input type="text" className="form-control" id="inputPhoneModel" placeholder="Phone Model" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-4">
                <label htmlFor="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>Kuala Lumpur</option>
                  <option>Kedah</option>
                  <option>Selangor</option>
                  <option>Kelantan</option>
                  <option>Negeri Sembilan</option>
                  <option>Pahang</option>
                  <option>Johor</option>
                  <option>Perak</option>
                  <option>Sabah</option>
                  <option>Terengganu</option>
                  <option>Pulau Pinang</option>
                  <option>Perlis</option>
                  <option>Sarawak</option>
                  <option>Melaka</option>
                </select>
              </div>
              <div className="form-group col-md-4">
                <label htmlFor="inputOutlet">Outlet</label>
                <select id="inputOutlet" className="form-control">
                  <option selected>Choose...</option>
                  <option>Outlet 1</option>
                  <option>Outlet 2</option>
                  <option>Outlet 3</option>
                </select>
              </div>
              <div>
                <label htmlFor="issue">Describe Your Other Issue</label>
                <input type="text" className="form-control" id="inputissue" />
              </div>
            </div>
            <br/>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <div className="section-divider">
            <section id="contact-details">
              <h4>Contact Details</h4>
              <p>If you need immediate assistance, you can reach us at:</p>
              <p>Email: mobilephonesupport@gmail.com</p>
              <p>Phone: +60 456-7890</p>
            </section>
            {/* <footer>
              &copy; 2024 Mobile Phone. All rights reserved.
            </footer> */}
          </div>
        </div>
      </div>
    );
  }
}

export default SupportPage;
