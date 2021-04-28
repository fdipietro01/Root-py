import React, {useState, useEffect}from "react";
import "./ItemDetailContainer.css";
import * as img from "../../Assets";
import { ItemListDetail } from "../../container/ItemListDetail/ItemListDetail";


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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus placerat iaculis. Duis consequat odio nisl, at porttitor enim molestie vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin venenatis dui vitae arcu vehicula hendrerit. Nullam scelerisque tincidunt orci, quis gravida nisl. Quisque feugiat vel nisl molestie condimentum. Sed eleifend tellus vitae eleifend dapibus. Fusce feugiat sed risus vitae auctor. Suspendisse potenti. Pellentesque vel malesuada nisi. Sed metus enim, bibendum sit amet mollis sit amet, dignissim quis nibh. Nam id dapibus justo. In hac habitasse platea dictumst.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, leo ut dapibus maximus, sem lacus auctor arcu, a blandit nibh sem vel velit. Proin et auctor sapien. Aenean maximus ut ex ut bibendum. In tincidunt nec nulla a dignissim. Nam at tellus eu tellus feugiat maximus sed non tortor. Aliquam erat volutpat. Ut augue metus, ullamcorper at condimentum a, bibendum ornare dui. Nunc a consectetur justo. Etiam pulvinar sodales placerat. Nulla at diam ac dui tincidunt lobortis. Sed commodo, erat et varius commodo, dui mi posuere diam, ut rutrum nisi ipsum eget tellus. Duis dolor urna, sodales vel euismod vitae, venenatis a mauris. Pellentesque egestas augue a lorem finibus, at condimentum arcu tempus. Curabitur quis sollicitudin tortor, at interdum nisl."
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
        {arrayItem.length > 0? <ItemListDetail props = {arrayItem} /> : <h1 className="loading">Cargando...</h1>}
            
        </>
    )
}