import React from "react";
import "./ItemList.css";
import { Item } from "../../components/Item/Item";

export const ItemList = ({props})=>{

    return(
        <>  
        <div className="body">
            <div className="productListBox">
                {props.map((item)=>
                        <div className="productBox"> <Item url={item.url} name={item.name} kind={item.kind} price={item.price} stock={item.stock}/></div>
                )}
            </div>
        </div>
        </>

    )
}