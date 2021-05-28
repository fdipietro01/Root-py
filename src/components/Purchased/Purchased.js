import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Purchased.css"
export const Purchased = ()=>{

    const { orderId } = useContext(CartContext)
    const { loading } = useContext(CartContext)
    const { cart } = useContext(CartContext)

    return (

    <div className ="bodyCart">
        <div className="box">
            <div className ="txtCont">
                <img className="tickImg" src="https://firebasestorage.googleapis.com/v0/b/roots-stor.appspot.com/o/a1.svg?alt=media&token=3418909a-90cc-4c24-9590-19c0b41bcb4e" alt="done"/>
                <p className="txt"> Su orden se ha sido procesada exitosamente !</p>
            </div>    
            {loading === true? 
            <div className= "txtCont">
                 <div className="spinner"></div>   
                 <p className="txt">Aguarde mientras se genera su comprobante </p>
            </div>:
            <div className= "txtCont">
            <p className="txt"> Su número identificador de pedido es: {orderId}</p>
            </div>}
        </div>
    </div>
)
}