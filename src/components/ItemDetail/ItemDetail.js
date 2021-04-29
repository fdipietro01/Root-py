import React from "react";
import "./ItemDetail.css";


export const ItemDetail = ({props})=>{
    return(
        <>
        <div className="bodyDetail">
            <div className="productDetailBox">
                <div className = "container">
                    <div className="itemDetailCard">
                        <div className="image-box"><img className="itemDetail-img" src={props.url} alt="product"/></div>
                        <p className = "plantDetail-name">{props.name}</p>
                    </div>
                    <div className="itemDetail-info">                                        
                        <p className = "plantDetail-kind">Tipo/Especie: {props.kind}</p>
                        <p className = "plantDetail-price">Precio: {props.price}</p>   
                        <p className = "plantDetail-id">Id: {props.id}</p>
                        <div className="plantDescription">{props.description}</div>                           
                    </div>
                </div> 
            </div>
        </div>
        </>

    )
}