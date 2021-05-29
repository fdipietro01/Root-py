import React, {useState, useEffect}from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase"
import {NotFound} from "../../components/NotFoud/NotFound"


export const ItemDetailContainer = ()=>{
    const [itemD, setItemD] = useState([]);
    const {id} = useParams();
    const [existe, setExiste] = useState()

    useEffect(()=>{   
      const db = getFirestore();
      const itemCollection = db.collection("items");
      const item =itemCollection.doc(id);
       item.get()
       .then((item)=>{
         setItemD({id: item.id, ...item.data()})
         item.exists ? setExiste(true):setExiste(false)      
        })
        .catch((err)=>console.log("ocurrio un error en la carga del item", err))
        .finally(()=>console.log("carga filtrada exitosa")) 
    
        } ,[id])

    return(
        <>
        {existe ===false? <NotFound/>:
        itemD.id !== undefined? <ItemDetail item = {itemD}/> : 
        <div className="loader"> 
             <div className="spinner"></div> 
             <h2 className="loading">Cargando...</h2> 
          </div>
        }   
        </>
    )
}