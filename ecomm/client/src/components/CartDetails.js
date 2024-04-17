// <!-- cartdetails.js.HTML -->
// <!-- convert from trasnfrom tools cod eonline   -->
import React, { Component, useContext } from "react";
// import { Container, Row, Col, Button } from "reactstrap";

import Toggle from "./Toggle";
import PiImg from '../assets/images/Raspberry_Pi.png';
import PiLcdImg from '../assets/images/Raspberry_Pi_LCD.png';
import { itemContext } from "../context/ItemContext";
import ProductItem from "./ProductItem";


function CartDetails(props) {

    //data   set   here

    // stateCartDetails
    let state = {
        itemCount: 2,
        subTotal: 111.42,
        taxes: 9.14,
        falseShipping: true
    };

    //useState
    const { itemCount, subTotal, taxes } = state;

    ///
let pass = {one: 1};

// props.data
    pass = { ...pass ,pass};

    const shippingTotal = Number(props.data);
    const orderTotal =    subTotal + shippingTotal + taxes;

//    todo  ;;
    // cart =  useContext( itemContext);

    //   <!-- } -->
    /////

 
    // todoooo todo
    // tryyyy with thiss codes first  ;;
    // copyy convert to here

    return (
        <>
            <container className="cart-details-container">
              
              todo
            ccbbtogg 
            on Toggleclass
                <Toggle className="container-fluid">
                    {({ on, off, toggle }) => (
                        <div className="container-fluid">
                            <h2 onClick={toggle}>
                                <span>See item Details</span> {off && <span>+</span>}
                                {on && <span>-</span>}
                            </h2>

 
                            {on || (
                                <container>

                                    cart.product; 
                                    iteminCart;  is counter
{/* {console.log(iteminCart)} */}
{console.log( "props data== " , props)}

                                    

                                    <CartItem product= {1}/>
                                    <CartItem />
  
                                    {/* <row>
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
                                    </row> */}
                                </container>
                            )}
                        </div>
                    )}
              </Toggle>  
                Toggle --at the top;;
                {/* <!-- <Toggle />   --> */}

                <container className="mt-4">
                    <row>
                        <h6>
                            Subtotal ({itemCount} items):
                        </h6>

                        todo 
                        set Toggle to on aND SHOW HERE;
                    orderTotal and shipping
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
                        <a href="/terms">100% Price Match Guarantee</a>
                        {/* <Link> to=/terms  </Link> */}
                    </div>
                    <div>
                        <a href="/terms">90 Day Returns</a>
                    </div>
                </container>
                <button className="mt-4" color="primary" block="">
                    COMPLETE CHECKOUT
                </button>
            </container>
        </>

    );
};

export default CartDetails;




function CartItem(props) {
   

    // just test data
   
    let product = {
        image: "imageSrc11",
        name: "Raspberry Pi 3 Model B Motherboard ",
        description: "description11",
        quantity: 1,
        price: 38.50
    };

    return (
        <>
            <row>
                <div className="media">
                    <div className="media-body">
                        <img src={PiImg} className="img-fluid mr-3" alt="raspberry pi" />
                        {product.image}  todo change this

                    </div>
                    <h5 className="mt-0">{product.name}</h5>
                </div>
                <div className="media-count">
                    <p>
                        {product.quantity}
                    </p>
                </div>
                <div className="container-fluid">
                    <h6>
                        {product.price}
                    </h6>
                    {"props.cart.product.price"}
                </div>
            </row>
        </>
    );
}


