import './CartWidget.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faShoppingBasket} from '@fortawesome/free-solid-svg-icons';
import { CartContext } from "../../context/CartContext";
import {useContext} from "react";
import { SeekerContext } from '../../context/SeekerContext';

export const CartWidget = ()=>{
    const {cart} = useContext(CartContext)
    const {nroItems} = useContext(CartContext)
    const {reiniciarBusqueda} = useContext(SeekerContext)


    return(
        <>
            <div className="button" onClick={()=> reiniciarBusqueda()}> 
                {cart.length > 0 && <div className="counter">{nroItems}</div>} 
                <FontAwesomeIcon className="basket" icon={faShoppingBasket}/> Ir al carrito</div>  
        </>

    )
}