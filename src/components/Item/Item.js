import React from "react";
import "./Item.css";
import {Link} from "react-router-dom";


export const Item = ({id, url, name, kind, price,stock})=>{
    return(
        <>
            <div className="itemBox">
                <div className="item-card">
                <Link to={`/item/${id}`} className="linksItems"><div className="img-box"><img className="item-img" src={url} alt="product"/></div></Link>
                    <div className="item-info">
                        <p className = "plant-name">{name}</p>                    
                        <p className = "plant-kind">{kind}</p>
                        <div className="shop-card">
                            <p className = "plant-price">{price}</p>
                            <div className="divisoria"></div>
                            <Link to={`/item/${id}`} className="linksItems"><button className="chart-button">Ver Producto</button> </Link>
                        </div>    
                    </div>
                </div>    
            </div>

        </>

    )
}