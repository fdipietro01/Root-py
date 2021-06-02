import React, {useState} from "react"

export const SeekerContext = React.createContext([]); 

export const SeekerResults =({children})=>{
const [result, setResult] = useState([])
const [buscado, setBuscado] = useState("")

const reiniciarBusqueda = ()=> {
    const input = document.getElementById("searchInp")
    input.value=""
     setBuscado("")
     setResult()
 }

 const toUpLetter = (word)=> {
     if (word !== undefined)
    return word.toLowerCase()
    .trim()
    .split(' ')
    .map( v => v[0].toUpperCase() + v.substr(1) )
    .join(' ');  } 

return (
    <SeekerContext.Provider value={{result, setResult, buscado, setBuscado, reiniciarBusqueda, toUpLetter}}>
        {children}
        </SeekerContext.Provider>
    )  
}