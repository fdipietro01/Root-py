import React from "react";
import "./ItemListDetail.css";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";

export const ItemListDetail = ({props})=>{

    return(
        <>  
        <div className="bodyDetail">
            <div className="productDetailBox">
                {props.map((item)=>
                    <ItemDetail url={item.url} name={item.name} kind={item.kind} price={item.price} description={item.description}/>
                )}
            </div>
        </div>
        </>

    )
}