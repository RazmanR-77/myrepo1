// <!-- cartdetails.js.HTML -->
// <!-- convert from trasnfrom tools cod eonline   -->
import React, { Component, useContext, useState } from "react";
// import { Container, Row, Col, Button } from "reactstrap";

import Toggle from "./Toggle";
import CartItem2 from "./CartItem2";
import PiImg from '../assets/images/Raspberry_Pi.png';
import PiLcdImg from '../assets/images/Raspberry_Pi_LCD.png';
import { itemContext } from "../context/ItemContext";

import { removeDuplicateObjectsByKey } from "../MyCodes";


function CartDetails(props) {

    const { cart, itemsInCart, totalPrice } = useContext(itemContext);
    let product ; 

    const [cartList, setCartList] = useState([]);
 
    // uniqueList
    // const [uniqueList, setUniqueList] = useState([]);
   
//     todo fix this, remove maybe
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

     let cLMap = [];
     cLMap =  cartList;
    //  let list = [];

     
//   cartList.  map()

//   -filter ()  
  
// todo 
  let oneCartItemOnly; // = getUnique();

  let uniqueLL, uniqueList = [];

  let { cartL, uniqueL } = getUnique();

  
  function getUnique() {
    //remove duplicates 
   

       //get same cart item only
      let oneCartItemOnly;
  
    //  cartlist 
    //  clmap;
//    
    //   uniqueList = cartList.filter(function(item, index){

    //     console.log( "cartDetails.list11== ",  item.name,  index , item, cartList.indexOf(item) == index); 
    //     if(cartList.indexOf(item) == index)
    //    { oneCartItemOnly = item;
    //     list.push( oneCartItemOnly );
    //         }

    //     return (cartList.indexOf(item) == index)
    //     // ? item : null;
    //   });

 
      
    //     oneCartItemOnly = cartList.filter(
    //       (item) => (item.name)
    //   )
       
      // (item.name == product.name)
 
    //   todo
// let list = [];

//   list = cartList;
      // then add updayte  to cartList[]  usestate ;;
   
      //   list.push(oneCartItemOnly);

   //   todo
    //   setUniqueList(uniqueL  );


    // console.log("cartDetails.list22== list =="  ,    cartList , list, ",, uniqueL== ",  uniqueL); 

    let   uniqueL, cartL; // uniqueLittst;

    let  list;
    list = [cart];  //cartList
    let listOut;
    
    //  uniqueL =   removeDuplicateObjectsByKey(list, "name"   );

    //   list.push(oneCartItemOnly);

       
    // listOut =   removeDuplicateObjectsByKey(list, "name"   );
    // listOut =   removeDuplicateObjectsByKey(listOut, "name"   );


    // todooo todo
    // let uniqueList;
    uniqueL = removeDuplicateObjectsByKey(...list, 'name');

    // uniqueL = removeDuplicateObjectsByKey(...[uniqueL], 'name');


    // uniqueL =    listOut;

    // setUniqueList(uniqueL);
    console.log("cartDetails.list22== list =="  ,    cartList , list, ",, uniqueLll== ",  uniqueL); 
    // setUniqueList(uniqueL);

    
    //   list = cartList;
    //   setCartList(list);

      
    // setCartListMap(cartList);

      return  {  cartL, uniqueL};  //oneCartItemOnly;
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
                            <h2 onClick={toggle}>
                                <span>See item Details</span> {off && <span>+</span>}
                                {on && <span>-</span>}
                            </h2>

<div class="load" onLoad={uniqueL = getUnique()}    >
            onloaddd;;

            {/* <div class="load" onLoad={uniqueLL = getUnique()}    >
onloaddd;;

</div> */}
            {console.log("uniqueList== ", uniqueList, uniqueL, cartL)}
        </div>


                {/* tempp only   on || */}
                            {on != (
                                <container>

                                    cart.product; 
                                    iteminCart;  is counter

        

                                    {console.log( "props data== " , props)}
{/* { product = ProductItem} */}

{console.log( "cart== "  , cart, ",,, ", cart[2], itemsInCart, totalPrice)}

{console.log( "product data== " , product)}

    <div>         
    {  cLMap =  uniqueL.uniqueL.map(    (product) =>(

        
        <CartItem key={product._id} product= {product}
        cart={cart} cartList={cartList}  />
                    // {cartList}
        ))}

                    {console.log("cartList data== ", cartList.length, cartList, "cLMap== " + cLMap, cLMap[0], cart,  "uniqueL.uniqueL== " ,uniqueL.uniqueL)}
                </div>


            </container>
        )}

             
  
    </div>
)}
           



                </Toggle>  
                Toggle --at the top;;
 


                {console.log("oneCartItemOnly==  ",  oneCartItemOnly)}

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

// dummy data  //todo
// [1,2, "Linen", "Linen","Linen", "Linen"]

// let cart = [
//     {
//         "_id": "661fe1c88b9e5c1672b371ae",
//         "name": "Pointelle Striped Sleeve Sweater",
//         "type": "Women",
//         "description": "With Denim Easy Pants",
//         "price": 89,
//         "image": "https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-3.webp?1712224192811",
//         "__v": 0
//     },
//     {
//         "_id": "661fe1c88b9e5c1672b371ae",
//         "name": "Pointelle Striped Sleeve Sweater",
//         "type": "Women",
//         "description": "With Denim Easy Pants",
//         "price": 89,
//         "image": "https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-3.webp?1712224192811",
//         "__v": 0
//     },
//     {
//         "_id": "661fe1c88b9e5c1672b371ae",
//         "name": "Pointelle Striped Sleeve Sweater",
//         "type": "Women",
//         "description": "With Denim Easy Pants",
//         "price": 89,
//         "image": "https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-3.webp?1712224192811",
//         "__v": 0
//     },
//     {
//         "_id": "661fe1c88b9e5c1672b371af",
//         "name": "Ribbed Polo Short Sleeve Cardigan",
//         "type": "Women",
//         "description": "With Linen Cotton Gather Skirt",
//         "price": 250,
//         "image": "https://www.uniqlo.com/jp/ja/contents/collaboration/ines/24ss/common/imgs/lookbookItems/lookbook-1.webp?1712224193373",
//         "__v": 0
//     }
// ]


// todo  get quantity
    let { qty, cartItem } = getQuantity(props.cart);
    product = { ...product, ...{ quantity: qty }}; 
//{qty 3}


  // useState try
  let cartList = props.cartList;  //initialise
//   let cartList = [];  //initialise

// cartItem = product;

// (cartItem.name != product.name )


// let cartList;
//   todo

// todo    
// (cartItem.name == product.name )
// if (cartItem == product )  {
 
    cartList.push(cartItem) ;
// }



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


