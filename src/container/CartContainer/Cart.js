import "./Cart.css";
import {CartContext} from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import {getFirestore} from "../../firebase";


export const Cart = ()=>{

    const {cart} = useContext(CartContext);
    const [itemInCart, setItemInCart] = useState([]);
    const [itemDef, setItemDef] = useState([]);
    
    const getItemFromFs = (id, quantify)=>{
         const db = getFirestore();
         const itemCollection = db.collection("items");
         const item =itemCollection.doc(id);
         item.get()
         .then((item)=>{
             item.exists? console.log("existe", item.data()) : console.log("no existe")
             setItemDef({...item.data(), id:id, quantify:quantify})
             console.log(itemDef)            
              })
              .catch((err)=>console.log("ocurrio un error en la carga del item en cart", err))
              .finally(()=>console.log("carga en cart exitosa"))
              return itemDef  
    }

    useEffect(()=>{
        setItemInCart(cart.map(item=>getItemFromFs(item.id, item.quantify)))

    },[cart])

    
    
    return(
        <>
            <div className="mainly" >

                {itemInCart.map(x=>{
                        return  <div key={x.id} className="CartDetailContainer">
                                    <img className="pict" src={x.url} alt="img"/>
                                    <div className="name">{x.name}</div>
                                    <div className="name"> {x.id}</div>
                                    <div className="cantTot"> X{x.quantify}unidades</div>
                                    <div className="Tot"> Subotal<span className="TotSpan">${x.quantify*x.price}</span></div>
                                    
                               </div>}) }
            </div>
        </>
    )
}