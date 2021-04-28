import React from "react";
import "./ItemDetail.css";

export const ItemDetail = ({url, name, kind, price,description})=>{
    return(
        <>
        <div className = "container">
            <div className="itemDetailCard">
                <div className="image-box"><img className="item-img" src={url} alt="product"/></div>
                <p className = "plantDetail-name">{name}</p>
            </div>
            <div className="itemDetail-info">                                        
                    <p className = "plantDetail-kind">Tipo/Especie: {kind}</p>
                    <p className = "plantDetail-price">Precio: {price}</p>   
                    <div className="plantDescription">{description}</div>                           
                </div>
            </div> 
        </>

    )
}