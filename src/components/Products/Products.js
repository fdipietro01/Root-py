import React from "react";
import { ItemListContainer } from "../../container/ItemListContainer/ItemListContainer";
import { FilterBar} from "../../container/FilterBar/FilterBar";
import "./Products.css";

export const Products = ()=>{

    return (
        <>
            <div className="main-box">
                <FilterBar/>
                <ItemListContainer/> 
            </div>
        </>
    )
}