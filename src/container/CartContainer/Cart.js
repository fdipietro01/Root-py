import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const Cart = () => {
  const { cart } = useContext(CartContext);
  const { removeIt } = useContext(CartContext);
  const { total } = useContext(CartContext);

  return (
    <>
    <div className ="bodyCart">
      <div className= {cart.length > 0? "mainly" : "emptyCart"}>
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
              <div className="botonera">
                <button onClick={() => removeIt(x.id)} className="trash">
                  <FontAwesomeIcon className="trashIc" icon={faTrash} />{" "}
                </button>
                <Link className="trashLink" to={`/item/${x.id}`}>
                  <button className="trash">
                    <FontAwesomeIcon
                      className="trashIc"
                      icon={faExternalLinkAlt}
                    />{" "}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}

        {cart.length > 0? (
          <div className="bottomBox">
            <div className="cartTotal"> Total: <span className="cartTotalValue">${total}</span></div>
            <p className="aclaracion">*todos los impuestos agregados</p>
            <div className="endMenu">
              <Link to={"/"}> <button className="endMenuBut">Volver al catálogo</button> </Link>
              <button className="endMenuBut">Terminar compra</button>
            </div>
          </div>
        ) : <div className="emptyCartText">
          <p className="emptyCartText2">¿Todavía no encontraste lo que buscabas?</p>
        <p className="emptyCartText2">¡Encontrá lo mejor de nuestro catálogo acá!</p>
        <Link to={"./"} ><div><img src="https://firebasestorage.googleapis.com/v0/b/roots-stor.appspot.com/o/root.jpg?alt=media&token=c0466596-fb53-4e60-9780-09342494a520" className="log" alt="logo" /></div></Link></div>}
      </div>
      </div>
    </>
  );
};
