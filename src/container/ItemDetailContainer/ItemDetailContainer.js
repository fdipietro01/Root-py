import React, {useState, useEffect, useContext}from "react";
import "./ItemDetailContainer.css";
import { ItemDetail } from "../../components/ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase"
import {NotFound} from "../../components/NotFoud/NotFound"
import {Loader} from "../../components/Loader/Loader"
import {CartContext} from "../../context/CartContext";




export const ItemDetailContainer = ()=>{
    const [itemD, setItemD] = useState([]);
    const {id} = useParams();
    const [existe, setExiste] = useState()
    const [itemSelection, setItemSelection] = useState();
    const{addItem}=useContext(CartContext);

    const onAdd = (itemsPorAgregar)=>{
      if (itemsPorAgregar !== 0){
      setItemSelection(itemsPorAgregar)
      addItem(itemD, itemsPorAgregar)
    }
  } 

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
        itemD.id !== undefined? <ItemDetail item = {itemD} onAdd={onAdd} itemSelection={itemSelection}/> : 
        <Loader mensaje={"Cargando"}/>
        }   
        </>
    )
}