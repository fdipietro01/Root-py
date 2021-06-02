import React, {useContext} from "react";
import "./ItemDetail.css";
import { ItemCount } from "../../container/ItemCount/ItemCount";
import {Link} from "react-router-dom";
import { SeekerContext } from "../../context/SeekerContext";



export const ItemDetail = ({ item, onAdd, itemSelection }) => {
  
    const {reiniciarBusqueda, toUpLetter} = useContext(SeekerContext)
      

  return (
    <>
      <div className="bodyDetail">
        <div className="productDetailBox">
          <div className="container">
            <div className="itemDetailCard">
              <div className="image-box">
                <img className="itemDetail-img" src={item.url} alt="product" />
              </div>
              <p className="plantDetail-name">{toUpLetter(item.name)}</p>
            </div>
            <div className="itemDetail-info">
              <p className="plantDetail-kind">Tipo/Especie: {toUpLetter(item.kind)}</p>
              <p className="plantDetail-price">Precio: ${item.price}</p>
              <p className="plantDetail-id">Id: {item.id}</p>
              <div className="plantDescription">{item.description}</div>
            </div>
          </div>
          <div className="contador2">
          {itemSelection === undefined? <ItemCount it={item} helper={onAdd}/> :
          <><Link to={`/cart`} className="linksItems"> <button className="chart-button" onClick={()=>reiniciarBusqueda()}>Visitar el carrito</button> </Link>
          <Link to={"/"}> <button className="chart-button chart-button2" onClick={()=>reiniciarBusqueda()}>Seguir comprando</button></Link>
          </> }
          </div>
        </div>
      </div>
    </>
  );
};
