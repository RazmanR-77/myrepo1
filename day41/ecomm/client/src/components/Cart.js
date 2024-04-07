// Cart.js

import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { itemContext } from '../context/ItemContext';

export default function Cart(clickCart, itemsInCart)


// function Cart(clickCart, itemsInCart) 
{

    const { itemsInCart, totalPrice } = useContext(itemContext);



    return (
        <div>
            <a href='http://localhost:5000/api/shopcart' target='_blank'>
                <div className='cart-num' onClick={(e) => (1)}>
                    <FontAwesomeIcon
                        icon={faCartShopping} size="2x" />
                    <div className='cart-items'>
                        {itemsInCart}
                    </div>


                </div>
            </a>
        </div>
    )
}
