import React, {useContext, useState} from "react";
import "./ItemDetail.css";
import { ItemCount } from "../../container/ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";


export const ItemDetail = ({ item }) => {
  

    const{addItem}=useContext(CartContext);

    const [itemSelection, setItemSelection] = useState();


    const onAdd = (itemsPorAgregar)=>{
        if (itemsPorAgregar !== 0){
        setItemSelection(itemsPorAgregar)
        console.log(itemsPorAgregar)
        addItem(item, itemsPorAgregar)
      }
    }    

  return (
    <>
      <div className="bodyDetail">
        <div className="productDetailBox">
          <div className="container">
            <div className="itemDetailCard">
              <div className="image-box">
                <img className="itemDetail-img" src={item.url} alt="product" />
              </div>
              <p className="plantDetail-name">{item.name}</p>
            </div>
            <div className="itemDetail-info">
              <p className="plantDetail-kind">Tipo/Especie: {item.kind}</p>
              <p className="plantDetail-price">Precio: {item.price}</p>
              <p className="plantDetail-id">Id: {item.id}</p>
              <div className="plantDescription">{item.description}</div>
            </div>
          </div>
          <div className="contador2">
          {itemSelection === undefined? <ItemCount it={item} helper={onAdd}/> : <Link to={`/cart`} className="linksItems"> <button className="chart-button">Terminar mi compra</button> </Link> }
          </div>
        </div>
      </div>
    </>
  );
};
