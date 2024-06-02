import React from "react";
import image from "./img/flat-lay-desk-with-laptop-headphones.jpg";
import './homeSora.css';

function HomeSora() {
  return (
    <div>
        <div className="banner" style={{ backgroundImage: `url(${image})`}}>
            <div className="intro">
              <h1>Mobile Gadget</h1>
              <h4>Your one-stop shop for mobile gadget.</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br></br> Alias
                nemo quos magni accusantium architecto ab ipsam recusandae,
                impedit vero repellat.
              </p>
              <a
                href="#top-product"
                id="shop-now-button"
                className="btn btn-outline-dark my-2 my-sm-0"
                type="submit"
              >
                Shop now
              </a>
            </div>
        </div>
        {/* Top Product Section */}
        <section>
          <div className="container" id="top-product">
            <h1 className="text-center mt-5">Our top products</h1>
            <div className="row">
              {/* card 1 */}
              <div className="col-md-4 py-3 py-md-0">
                <div className="card" id="home-card">
                  <img
                    className="card-img-top"
                    id="home-card-img"
                    src="./assets/top-product-iphone-9.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body" id="home-card-body">
                    <h4 className="card-title">iPhone 9</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique, sit.
                    </p>
                    <a
                      href="./ProductsRazmanR"
                      className="btn btn-outline-dark my-2 my-sm-0"
                      id="top-product-button"
                      target="blank"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
              {/* card 2 */}
              <div className="col-md-4 py-3 py-md-0">
                <div className="card" id="home-card">
                  <img
                    className="card-img-top"
                    id="home-card-img"
                    src="./assets/top-product-huawei-p30.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Huawei P30</h4>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Id, expedita!
                    </p>
                    <a
                      href="./ProductsRazmanR"
                      className="btn btn-outline-dark my-2 my-sm-0"
                      id="top-product-button"
                      target="blank"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="col-md-4 py-3 py-md-0">
                <div className="card" id="home-card">
                  <img
                    className="card-img-top"
                    id="home-card-img"
                    src="./assets/top-product-iphone-x.jpg"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h4 className="card-title">iPhone X</h4>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita, molestiae.
                    </p>
                    <a
                      href="./ProductsRazmanR"
                      className="btn btn-outline-dark my-2 my-sm-0"
                      id="top-product-button"
                      target="blank"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Services we offer */}
        <section>
          <div className="container" id="services-offer">
            <h1 className="text-center mt-5">Services we offer</h1>
            <div className="row">
              {/* service 1 */}
              <div className="col-md-4 py-3 py-md-0">
                <div className="card" id="home-card">
                  <img
                    className="card-img-top"
                    src="./assets/services-we-offer-1.jpg"
                    alt="Card image cap"
                    id="home-card-img"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Lorem, ipsum.</h4>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, voluptates.
                    </p>
                    <a
                      href="/services_william"
                      className="btn btn-outline-dark my-2 my-sm-0"
                      id="top-product-button"
                      target="blank"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
              {/* service 2 */}
              <div className="col-md-4 py-3 py-md-0">
                <div className="card" id="home-card">
                  <img
                    className="card-img-top"
                    src="./assets/services-we-offer-2.jpg"
                    alt="Card image cap"
                    id="home-card-img"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Lorem, ipsum.</h4>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, voluptates.
                    </p>
                    <a
                      href="/services_william"
                      className="btn btn-outline-dark my-2 my-sm-0"
                      id="top-product-button"
                      target="blank"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
              {/* service 3 */}
              <div className="col-md-4 py-3 py-md-0">
                <div className="card" id="home-card">
                  <img
                    className="card-img-top"
                    src="./assets/services-we-offer-3.jpg"
                    alt="Card image cap"
                    id="home-card-img"
                  />
                  <div className="card-body">
                    <h4 className="card-title">Lorem, ipsum.</h4>
                    <p className="card-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consectetur, voluptates.
                    </p>
                    <a
                      href="/services_william"
                      className="btn btn-outline-dark my-2 my-sm-0"
                      id="top-product-button"
                      target="blank"
                    >
                      View more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default HomeSora;
