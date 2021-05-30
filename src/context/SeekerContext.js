import React, {useState} from "react"

export const SeekerContext = React.createContext([]); 

export const SeekerResults =({children})=>{
const [result, setResult] = useState()
const [buscado, setBuscado] = useState("")

const reiniciarBusqueda = ()=> {
    const input = document.getElementById("searchInp")
    input.value=""
     setBuscado("")
 }

return (
    <SeekerContext.Provider value={{result, setResult, buscado, setBuscado, reiniciarBusqueda}}>
        {children}
        </SeekerContext.Provider>
    )  
}