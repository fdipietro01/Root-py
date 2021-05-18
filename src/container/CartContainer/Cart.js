import React, {useState} from "react";
import "./Cart.css";
import {CartContext} from "../../context/CartContext";
import { useContext, useEffect } from "react";
import {getFirestore} from "../../firebase";


export const Cart = ()=>{

    const {cart} = useContext(CartContext);
    const [arrayIt, setArrayIt] = useState([]);

    useEffect(()=>{
    const db = getFirestore();
       const itemCollection = db.collection("items");
       itemCollection.get()
       .then((lista)=>{
         lista.size===0 ? console.log("no existe") : console.log(`existe ${lista.size} items`);
         const listItems = lista.docs.map(x=> {
           return {id:x.id, ...x.data()} }); 
         console.log(listItems)
         setArrayIt(listItems)
    })
    .catch((err)=>console.log("ocurrio un error", err))
    .finally(()=>console.log("carga exitosa"))
  },[])

    const filtro = (id)=> arrayIt.filter(x=>x.id === id);
    const name = (id)=> {const a=filtro(id);
    return a[0].name}
    const imag = (id)=> {const a=filtro(id);
        return a[0].url}
    const price = (id)=> {const a=filtro(id);
                    const b=a[0].price.slice(1)
                    return parseInt(b)}    

    return(
        <>
            <div className="mainly" >

                {cart.map(x=>{
                        return  <div key={x.id} className="CartDetailContainer">
                                    <img className="pict" src={imag(x.id)} alt="img"/>
                                    <div className="name"> #{x.id}</div>
                                    <div className="name"> {name(x.id)}</div>
                                    <div className="cantTot"> X{x.quantify}unidades</div>
                                    <div className="Tot"> Subotal<span className="TotSpan">${x.quantify*price(x.id)}</span></div>
                                    
                               </div>}) }
            </div>
        </>
    )
}