import React, {useContext, useEffect, useState} from "react";
import './Seeker.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getFirestore } from "../../firebase"
import { SeekerContext } from "../../context/SeekerContext"
import { Link } from "react-router-dom"

export const Seeker = ()=>{
    const [input, setInput] = useState()
    const {setResult}=useContext(SeekerContext)
    const {buscado, setBuscado} = useContext(SeekerContext)

    const buscar = ()=>{
        setBuscado(input)
    }
    useEffect(()=>{
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get()
        .then((lista)=>{
          if (lista.empty === false){
              let catalogo = lista.docs.map(x=> {return {id:x.id, ...x.data()}})
              const resultado = catalogo.filter(x=>x.name === buscado || x.kind === buscado || x.category === buscado || 
                                (x.name.includes(buscado) && buscado.length > 4)||
                                (x.kind.includes(buscado) && buscado.length > 4)||
                                (x.category.includes(buscado) && buscado.length > 4))
              setResult (resultado)
          } else {
             setResult([]); 
            
          }
     })
     .catch((err)=>console.log("ocurrio un error", err))
     .finally(()=>console.log("carga exitosa"))
     document.getElementById("searchInp").value=""
     },[buscado])
    
            

    return(
        <>
        <div className="seekerContainer">
            <input id="searchInp" placeholder="Buscar productos..." className="seeker" type="text"
                onBlur={(e)=>e.target.placeholder="Buscar productos..."} 
                onFocus={(e)=>e.target.placeholder=""} 
                onChange={(e)=>setInput(e.target.value)}
                onKeyUp={(e)=> e.key === "Enter" && document.getElementById("searchBtn").click()}>
            </input>
            </div>
        <Link disabled={buscado===""} to={"/SearchResults/"}><button id="searchBtn" onClick={()=>buscar()} className="iconSearch">
            <FontAwesomeIcon className="icon" icon={faSearch}></FontAwesomeIcon>
        </button></Link>
        </>
    )
}