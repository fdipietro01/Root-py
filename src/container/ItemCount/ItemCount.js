import React from "react";
import "./ItemCount.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';


export const ItemCount = ({stock})=>{

    return (
        <>
            <div className="counter-container">
                <div className="botonera">
                    <button className="but butminus"><FontAwesomeIcon className="ic" icon={faCaretDown}/></button>
                    <p>0</p>
                    <button className="but"><FontAwesomeIcon className="ic" icon={faCaretUp}/></button>
                </div>
                <p className="stock">(Stock disponible: {stock})</p>
                <button className="chart-button">Agregar al Carrito</button>
            </div>

        </>
    )
}