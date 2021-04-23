import React, {useState} from "react";
import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingBasket} from '@fortawesome/free-solid-svg-icons';

export const CartWidget = ()=>{
    let [chart, setChart] = useState(0);

    return(
        <>
            <div className="button"> <div className="counter">{chart}</div>  <FontAwesomeIcon className="basket" icon={faShoppingBasket}/> Ir al carrito  </div>
        </>

    )
}