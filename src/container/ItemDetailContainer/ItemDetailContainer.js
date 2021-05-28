import React, {useState, useEffect}from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase"


export const ItemDetailContainer = ()=>{
    const [itemD, setItemD] = useState([]);
    const {id} = useParams();

    useEffect(()=>{   
      const db = getFirestore();
      const itemCollection = db.collection("items");
      const item =itemCollection.doc(id);
       item.get()
       .then((item)=>{
         setItemD({id: item.id, ...item.data()})      
        })
        .catch((err)=>console.log("ocurrio un error en la carga del item", err))
        .finally(()=>console.log("carga filtrada exitosa")) 
    
        } ,[id])

    return(
        <>
        {itemD.exists !==[]? <ItemDetail item = {itemD} /> : 
        <div className="loader"> 
            <div className="spinner"></div> 
            <h2 className="loading">Cargando...</h2> 
        </div>}   
        </>
    )
}