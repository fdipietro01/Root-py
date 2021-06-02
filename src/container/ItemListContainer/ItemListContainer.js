import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import { ItemList } from "../../components/ItemList/ItemList";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase"
import {Loader} from "../../components/Loader/Loader"

export const ItemListContainer = () => {
  const [arrayIt, setArrayIt] = useState([]);
  const [arrayFilt, setArrayItFilt] = useState([]);
  const {id} = useParams(); 
  

  useEffect(() => {

    if (id === undefined) {
      const db = getFirestore();
       const itemCollection = db.collection("items");
       itemCollection.get()
       .then((lista)=>{
         const listItems = lista.docs.map(x=> {
           return {id:x.id, ...x.data()} }); 
         setArrayIt(listItems)
    })
    .catch((err)=>console.log("ocurrio un error", err))
    .finally(()=>console.log("carga exitosa"))
    } 
    else {
      const db = getFirestore();
      const itemCollection = db.collection("items").where("category", "==", id);
       itemCollection.get()
       .then((lista)=>{
         const listItems = lista.docs.map(x=> {
           return {id:x.id, ...x.data()} }); 
         setArrayItFilt(listItems)
    })
    .catch((err)=>console.log(`ocurrio un error en la carga de la categoría ${id}, ${err}`))
    .finally(()=>console.log("categoría cargada exitosamente"))
    } }, [id]);


  return (
    <>
      {id !== undefined? 
          (arrayFilt.length > 0?  <ItemList props = {arrayFilt}/>: 
          <Loader mensaje={"Cargando"}/>) : 
          (arrayIt.length > 0?  <ItemList props = {arrayIt} /> :
           <div className="loader"> 
             <div className="spinner"></div> 
             <h2 className="loading">Cargando...</h2> 
          </div>)}
    </>   
    )
};
