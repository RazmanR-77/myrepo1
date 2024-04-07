import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { itemContext } from '../context/ItemContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./Header.css";

function Header() {
    const [click, setClick] = useState(false);

    const { itemsInCart, totalPrice } = useContext(itemContext);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        BROPEE
                        <i class="fa-solid fa-dumpster-fire fa-xs" style={{ color: "FFD43B", }}></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                <i class="fa-solid fa-magnifying-glass"></i>

                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                <i class="fa-solid fa-user"></i>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </li>
                    </ul>
                    <div className='navbar-items'>
                        <h3 style={{ color: "green" }}>
                            Total Price: {totalPrice}
                        </h3>
                        <div className='cart-num'>
                            <FontAwesomeIcon
                                icon={faCartShopping} size="2x" />
                            <div className='cart-items'>
                                {itemsInCart}
                            </div>
                        </div>
                        {/* pls add to code   */}
                        <div>
                            <a href='http://localhost:5000/api/shopcart' target='_blank'  >
                                <div className='cart-num' onClick={(e) => clickCart()} >
                                    <FontAwesomeIcon
                                        icon={faCartShopping} size="2x" />
                                    <div className='cart-items'>
                                        {itemsInCart}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
    function clickCart() {

        return console.log("clickCart");
    }
}

export default Header;