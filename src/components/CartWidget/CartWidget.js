import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../context/CartContext";
import {useContext} from "react";

export const CartWidget = ()=>{
    const {cart} = useContext(CartContext)


    return(
        <>
            <div className="button"> 
                {cart.length > 0 && <div className="counter">{cart.length}</div>} 
                <FontAwesomeIcon className="basket" icon={faShoppingBasket}/> Ir al carrito</div>  
        </>

    )
}