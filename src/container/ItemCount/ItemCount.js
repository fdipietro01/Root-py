import React, {useState} from "react";
import "./ItemCount.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faCaretDown, faCaretUp, faShoppingBasket} from '@fortawesome/free-solid-svg-icons';


export const ItemCount = ({stock})=>{
    let [stockOnChart, setStockOnChart] = useState(0);
    let [stockTotal, setStockTotal] = useState(parseInt(stock));
        
    const sumar = ()=> { 
        if (!parseInt(stockTotal) <= 0){
            setStockTotal (stockTotal -=1);
            setStockOnChart(stockOnChart +=1);
        }    
    }

    const restar = ()=> { 
        if (!stockOnChart <=0){
            setStockTotal (stockTotal +=1);
            setStockOnChart(stockOnChart -=1);
            stock= parseInt(stock) + 1;
        }                  
    }

    const onAdd = ()=>{
        setStockOnChart(0);

    }

    



    return (
        <>
            <div className="counter-container">
                <div className="botonera">
                    <button onClick={restar} className="but butminus"><FontAwesomeIcon className="ic" icon={faCaretDown}/></button>
                    <p className="contador">{stockOnChart}</p>
                    <button onClick={sumar} className="but"><FontAwesomeIcon className="ic" icon={faCaretUp}/></button>
                </div>
                <p className="stock">(Stock disponible: {stockTotal})</p>
                <button className="chart-button" onClick={onAdd}><FontAwesomeIcon className="basket" icon={faShoppingBasket}/> Agregar al Carrito</button>
            </div>

        </>
    )
}