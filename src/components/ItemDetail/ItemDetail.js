import React from "react";
import "./ItemDetail.css";


export const ItemDetail = ({props})=>{
    return(
        <>
        <div className="bodyDetail">
            <div className="productDetailBox">
                <div className = "container">
                    <div className="itemDetailCard">
                        <div className="image-box"><img className="itemDetail-img" src={props[0].url} alt="product"/></div>
                        <p className = "plantDetail-name">{props[0].name}</p>
                    </div>
                    <div className="itemDetail-info">                                        
                        <p className = "plantDetail-kind">Tipo/Especie: {props[0].kind}</p>
                        <p className = "plantDetail-price">Precio: {props[0].price}</p>   
                        <p className = "plantDetail-id">Id: {props[0].id}</p>
                        <div className="plantDescription">{props[0].description}</div>                           
                    </div>
                </div> 
            </div>
        </div>
        </>

    )
}