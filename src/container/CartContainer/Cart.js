import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../../context/CartContext"
import "./Cart.css";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faTrash} from '@fortawesome/free-solid-svg-icons';
import{faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons';

export const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0)
  const {cart} = useContext(CartContext);
  const {removeIt} = useContext(CartContext);

 useEffect(()=>{
    cart.length>0? cart.map(x=> setTotalPrice (totalPrice + (x.price*x.quantify))) : setTotalPrice(0)
 },[cart])
  

  return (
    <>
      <div className="mainly">
        {cart.map((x) => {
          return (
            <div key={x.id} className="CartDetailContainer">
              <img className="pict" src={x.url} alt="img" />
              <div className="name">
                {x.name} <p className="idd">Id#{x.id}</p>
              </div>
              <div className="cantTot"> X{x.quantify} unidades</div>
              <div className="Tot">
                {" "}
                Subotal<span className="TotSpan">${x.quantify * x.price}</span>
              </div>
              <div className = "botonera" >
              <button  className="trash"><FontAwesomeIcon className="trashIc" icon={faTrash}/> </button>
              <Link className= "trashLink" to={`/item/${x.id}`}><button className="trash"><FontAwesomeIcon className="trashIc" icon={faExternalLinkAlt}/> </button></Link>
              </div>
            </div>            
          );
        })}

        {cart.length > 0 && <div> Total: {totalPrice}
                                <div className="endMenu">
                                    <Link to={"/"}> <button className="endMenuBut">Volver al catálogo</button></Link>
                                    <button className="endMenuBut">Terminar compra</button>
                                </div>
                            </div>}
      </div>
    </>
  );
};
