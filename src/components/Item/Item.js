import React, {useContext} from "react";
import "./Item.css";
import {Link} from "react-router-dom";
import { SeekerContext } from "../../context/SeekerContext";


export const Item = ({id, url, name, kind, price,stock})=>{

    const {reiniciarBusqueda} = useContext(SeekerContext)

    const toUpLetter = (word)=> {return word.toLowerCase()
        .trim()
        .split(' ')
        .map( v => v[0].toUpperCase() + v.substr(1) )
        .join(' ');  }
        
    return(
        <>
            <div className="itemBox">
                <div className="item-card">
                <Link to={`/item/${id}`} className="linksItems"><div className="img-box" onClick={()=>reiniciarBusqueda()} ><img className="item-img" src={url} alt="product"/></div></Link>
                    <div className="item-info">
                        <p className = "plant-name">{toUpLetter(name)}</p>                    
                        <p className = "plant-kind">{toUpLetter(kind)}</p>
                        <div className="shop-card">
                            <p className = "plant-price">${price}</p>
                            <div className="divisoria"></div>
                            <Link to={`/item/${id}`} className="linksItems"><button className="chart-button" onClick={()=>reiniciarBusqueda()}>Ver Producto</button> </Link>
                        </div>    
                    </div>
                </div>    
            </div>

        </>

    )
}