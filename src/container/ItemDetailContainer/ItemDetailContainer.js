import React, {useState, useEffect}from "react";
import "./ItemDetailContainer.css";
import * as img from "../../Assets";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";


export const ItemDetailContainer = ()=>{
    const [arrayItem, setArrayItem] = useState([]);
    
    useEffect(()=>{        
        const itemDet = [{
          url: img.Portulacaraia,
          id: "#fjk221",
          name: "Portulacaraia",
          kind: "Suculenta",
          price: "$270",
          stock: "12",
        }];
    
        const getItems = new Promise((res,rej)=>{
            setTimeout(() => {
                res(itemDet);
              }, 2000);
        });
        
        getItems
        .then((itemDet)=>{
            setArrayItem(itemDet);
        })
        .catch(() => {
            console.log("No cargó correctamente los datos");
          })
          .finally(() => {
            console.log("Carga finalizada");
          });
        } 
    ,[])
    
    return(
        <>
        {arrayItem.length > 0? <ItemDetail props = {arrayItem} /> : <h1 className="loading">Cargando...</h1>}
            
        </>
    )
}