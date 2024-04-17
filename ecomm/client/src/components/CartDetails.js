// <!-- cartdetails.js.HTML -->
// <!-- convert from trasnfrom tools cod eonline   -->
import React, { Component, useContext } from "react";
// import { Container, Row, Col, Button } from "reactstrap";

import Toggle from "./Toggle";
import PiImg from '../assets/images/Raspberry_Pi.png';
import PiLcdImg from '../assets/images/Raspberry_Pi_LCD.png';
import { itemContext } from "../context/ItemContext";


function CartDetails(props) {

    const { cart, itemsInCart, totalPrice } = useContext(itemContext);
    let product ; 
   
//     todo
// -set tooo product 
  product =    cart[0] ; // shows product data
// cart[2] 

product = { ...product , product  }


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
{/* { product = ProductItem} */}

{console.log( "cart== "  , cart, ",,, ", cart[2], itemsInCart, totalPrice)}

{console.log( "product data== " , product)}


            <CartItem product= {product}/>
            {/* <CartItem /> */}
            
            </container>
                            )}
                        </div>
                    )}
              </Toggle>  
                Toggle --at the top;;

                <container className="mt-4">
                    <row>
                        <h6>
                            Subtotal ({itemCount} items):
                        </h6>

                        {/* todo 
                        set Toggle to on aND SHOW HERE;
                    orderTotal and shipping */}
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
    //  (product params)

let product;
product = { ...props.product  };

    return (
        <div>
            {console.log("cartitem.product data== ", product,
                product.price, product["name"])
            }
            <row>
                <div className="media">
                    <div className="media-body">
                        <img src={product.image} className="img-fluid mr-3" alt={product.image}  />
                    
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
                        $ {product.price}
                    </h6>
                </div>
            </row>
        </div>
    );
}


