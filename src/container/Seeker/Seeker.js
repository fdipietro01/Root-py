import React, {useContext} from "react";
import './Seeker.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getFirestore } from "../../firebase"
import { SeekerContext } from "../../context/SeekerContext"
import { Link } from "react-router-dom"


export const Seeker = ()=>{

    const {result, setResult}=useContext(SeekerContext)
    const {buscado, setBuscado} = useContext(SeekerContext)

    const buscar = ()=>{
    const db = getFirestore();
       const itemCollection = db.collection("items").where("name", "==", `${buscado}`);
       itemCollection.get()
       .then((lista)=>{
        console.log(lista)
         if (lista.empty === false){
             const resultado = lista.docs.map(x=> {return {id:x.id, ...x.data()}})
             setResult (resultado)
            
         } else {
            setResult(); 
           
         }
    })
    .catch((err)=>console.log("ocurrio un error", err))
    .finally(()=>{console.log (result);
    console.log("carga exitosa")})
    }    

    return(
        <>
        <div className="seekerContainer">
            <input id="searchInp" onChange={(e)=>{setBuscado(e.target.value.toLowerCase())}} className="seeker" type="text" placeholder="Buscar productos..."></input>
            </div>
        <Link to={"/SearchResults/"}><button disabled={buscado ===""} onClick={()=>buscar()} className="iconSearch">
            <FontAwesomeIcon className="icon" icon={faSearch}></FontAwesomeIcon>
        </button></Link>
        </>
    )
}