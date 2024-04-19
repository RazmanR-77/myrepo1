 
import React, { Component, useContext, useState } from "react";
import Toggle from "./Toggle";
import CartItem2 from "./CartItem2";
import PiImg from '../assets/images/Raspberry_Pi.png';
import PiLcdImg from '../assets/images/Raspberry_Pi_LCD.png';
import { itemContext } from "../context/ItemContext";

import { removeDuplicateObjectsByKey } from "../MyCodes";

import "./CartDetails.css";

//final hackathon Ecommerce shopping website//
//developer by: RazmanR  
// date 7/4/2024

function CartDetails(props) {

    const { cart, itemsInCart, totalPrice } = useContext(itemContext);
    let product ; 

    const [cartList, setCartList] = useState([]);
 

    // usestate CartDetails DUMMY DATA ONLY
    let state = {
        itemCount: itemsInCart,
        subTotal: totalPrice,  //total price of all subTotals
        taxes: 0.00,
        falseShipping:  true
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

     let cLMap = [];
     cLMap =  cartList;
    //  let list = [];

//   -filter ()  
  
// todo 
  let oneCartItemOnly; // = getUnique();

  let uniqueLL, uniqueList = [];

  let { cartL, uniqueL } = getUnique();

    function getUnique() {
        //remove duplicates 

        //get same cart item only
        let oneCartItemOnly;
 
        let uniqueL, cartL; // uniqueLittst;

        let list;
        list = [cart];  //cartList
        let listOut;

        // todooo todo
        // let uniqueList;
        uniqueL = removeDuplicateObjectsByKey(...list, 'name');

        let outputList = [];
        let product, qty;

        // setUniqueList(uniqueL);
        console.log("uniqueList== ", uniqueL);
        oneCartItemOnly = [];

        // for each cart item in uniqueList,
        // to get quanity from the full list 
        // output is outputList;
        outputList = getQuantity(uniqueL, oneCartItemOnly, list, outputList);

        // todo 
        // /final output
        console.log("uniqueList== ", uniqueL, "outputList== ", outputList);
        uniqueL = outputList;
        return { cartL, uniqueL };  
    }

    function getQuantity(uniqueL, oneCartItemOnly, list, outputList) {
        uniqueL.forEach(  
            (uniqueC) => {
                //get same cart item only
                oneCartItemOnly = list[0].filter(
                    (item, key) => (item.name == uniqueC.name)
                );

                let cartItem;
                cartItem = uniqueC;

                cartItem = {
                    ...cartItem,
                    ...{
                        quantity: oneCartItemOnly.length
                    }
                };
           
                outputList.push(cartItem);
                console.log("after filteroneCartItemOnly== ", oneCartItemOnly, cartItem, "outputList== ", outputList);


            });
        return outputList;
    }


    return (
        <>
            <container className="cart-details-container">
             
              {/* <div> 

              todo
              CartItem222
     {   CartItem2()}
                 </div> */}

                <Toggle className="container-fluid">
                    {({ on, off, toggle }) => (
                        <div className="container-fluid">
                            <div>  &nbsp; </div>
                            <div>  &nbsp; </div>
                            <div>  &nbsp; </div>
                            <div>
                                <h2 onClick={toggle}>
                                    <button type="button"
                                        class="btn   btn-primary "
                                         onClick={toggle}>
                                        <span > See Cart item Details  </span>
                                    </button>
                                    {off && <span> - </span>}
                                    {on && <span> + </span>}
                                </h2>
                            </div>

<div class="load" onLoad=  {(e)=> uniqueL = getUnique()}    >
                    {console.log("uniqueList== ",
                     uniqueList, uniqueL, cartL)}
        </div>

                            {on || (
                                <container>

                        {console.log("props data== ", props)}
                        {console.log("cart== ", cart, ",,, ", cart[2], itemsInCart, totalPrice)}

                        {console.log("product data== ", product)}

    <div>         
    {  cLMap =  uniqueL.map(    (cartI) =>(
            // <>  CartItem </>
        // todo
        <CartItem key={cartI._id} product= {cartI}
        cart={cart} cartList={cartList}  />
                    // {cartList}
        ))}

                    {console.log("uniqueList uniqueL.CartDetails.CartItems; uniqueL== " ,uniqueL)}
                </div>


            </container>
        )}
    </div>
)}
     </Toggle>  

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


  
    // setCartListMap(cartList);
  
};

export default CartDetails;



function setCartListMap(cartL) {
    
        return cartL = cartL;
   
}

function CartItem(props) {
    //  (product params)

let product;
product = { ...props.product  };

   let { qty, cartItem } = getQuantity(props.cart);
    product = { ...product, ...{ quantity: qty }}; 
 
  // useState try
  let cartList = props.cartList;  //initialise 
 
    cartList.push(cartItem) ;

function getQuantity(cart) {
    let oneCartItemOnly;

    //get same cart item only
    oneCartItemOnly = cart.filter(
        (item) => (item.name == product.name)
    );

    let cartItem;
    let qty;

    //count quantity, add to json{}
        qty = oneCartItemOnly.length;
       oneCartItemOnly =  { ...oneCartItemOnly[0],
            ...{quantity: qty}
        }

        console.log( "one CartItem{}==",oneCartItemOnly );

        cartItem = oneCartItemOnly;
        return { qty, cartItem };
    }

    return (
        <div>
            {console.log("cartitem.product data== ", product,
                product.price, product["name"], 
                product.price == 89, 
              "product.name ==compare  " ,  product.name == ("Pointelle Striped Sleeve Sweater") 
                )
            }

            {
                console.log( "cartItem== ", cartItem,
                cartList, (cartItem.name == product.name ) )
            }

            <row>
                <div className="media">
                    <div className="media-body">
                        <img src={product.image} className="img-fluid mr-3" alt={product.image} />

                    </div>
                    <h5 className="mt-0">{product.name}
                        <div className="media-count">
                            <p>
                                x {product.quantity}
                            </p>
                        </div>
                    </h5>
                    <div>&nbsp;</div>
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


