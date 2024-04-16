// <!-- cartdetails.js.HTML -->
// <!-- convert from trasnfrom tools cod eonline   -->
import React, { Component } from "react";
// import { Container, Row, Col, Button } from "reactstrap";

// import Toggle from "../Toggle";
import PiImg from '../assets/images/Raspberry_Pi.png';
import PiLcdImg from '../assets/images/Raspberry_Pi_LCD.png';


function CartDetails(props) {

    //data   set   here

    // stateCartDetails
    let state = {
        itemCount: 2,
        subTotal: 111.42,
        taxes: 9.14,
        falseShipping: true
    };
    const { itemCount, subTotal, taxes } = state;
    const shippingTotal = Number(props.data);
    const orderTotal = subTotal + shippingTotal + taxes;

    //   <!-- } -->
    /////


    // todoooo todo
    // tryyyy with thiss codes first  ;;
    // copyy convert to here

    return (
        <>

            <container className="cart-details-container">
                <toggle className="container-fluid">
                    {({ on, off, toggle }) => (
                        <div className="container-fluid">
                            <h2 onClick={toggle}>
                                <span>See item Details</span> {off && <span>+</span>}
                                {on && <span>-</span>}
                            </h2>


                            {on && (
                                <container>
                                    <row>
                                        <div className="media">
                                            <div className="media-body">
                                                <img src={PiImg} className="img-fluid mr-3" alt="raspberry pi" />
                                            </div>
                                            <h5 className="mt-0">Raspberry Pi 3 Model B Motherboard</h5>
                                        </div>
                                        <div className="media-count">
                                            <p>1</p>
                                        </div>
                                        <div className="container-fluid">
                                            <h6>$38.50</h6>
                                        </div>
                                    </row>
                                    <row>
                                        <div className="media">
                                            <div className="media-body">
                                                <img src={PiLcdImg} className="img-fluid mr-3" alt="pi lcd" />
                                            </div>
                                            <h5 className="mt-0">Raspberry Pi 7" Touchscreen Display</h5>
                                        </div>
                                        <div className="media-count">
                                            <p>1</p>
                                        </div>
                                        <div className="container-fluid">
                                            <h6>$72.92</h6>
                                        </div>
                                    </row>
                                </container>
                            )}
                        </div>
                    )}
                </toggle>
                Toggle --at the top;;
                {/* <!-- <Toggle />   --> */}

                <container className="mt-4">
                    <row>
                        <h6>
                            Subtotal ({itemCount} items):
                        </h6>
                        <h6>
                            ${subTotal}
                        </h6>
                    </row>
                    <row>
                        <h6>Shipping:</h6>
                        <h6>
                            {shippingTotal !== 0 ? ("$" + Number(props.data)) : (
                                <span>--</span>)}
                        </h6>
                    </row>
                    <row>
                        <h6>Taxes:</h6>
                        <h6>
                            ${taxes}
                        </h6>
                    </row>
                    <row>
                        <h6>Total: </h6>
                        <h6>
                            ${orderTotal}
                        </h6>
                    </row>
                </container>
                <container>
                    <div>
                        <a href="/">100% Price Match Guarantee</a>
                    </div>
                    <div>
                        <a href="/">90 Day Returns</a>
                    </div>
                </container>
                <button className="mt-4" color="primary" block="">
                    COMPLETE ORDER
                </button>
            </container>
        </>

    );
};

export default CartDetails;




