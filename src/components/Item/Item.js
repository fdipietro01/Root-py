import React from "react";
import { ItemCount } from "../../container/ItemCount/ItemCount";
import "./Item.css";

export const Item = ({url, id, name, kind, price,stock})=>{
    return(
        <>
            <div class="itemBox">
                <div className="item-card">
                    <div className="img-box"><img className="item-img" src={url} alt="product"/></div>
                    <div className="item-info">
                        <p className = "plant-id">{id}</p>
                        <p className = "plant-name">{name}</p>                    
                        <p className = "plant-kind">{kind}</p>
                        <div className="shop-card">
                            <p className = "plant-price">{price}</p>
                            <ItemCount stock={stock}/>
                        </div>    
                    </div>
                </div>    
            </div>

        </>

    )
}