import React, {useState} from "react";
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect } from "react";

export const CartWidget = ()=>{
    let [chart, setChart] = useState(0);
    const {cart} = useContext(CartContext)

    useEffect (()=>{
        setChart(cart.length)
    },[cart])
   


    return(
        <>
            <div className="button"> 
                {cart.length > 0 && <div className="counter">{cart.length}</div>} 
                <FontAwesomeIcon className="basket" icon={faShoppingBasket}/> Ir al carrito</div>  
        </>

    )
}