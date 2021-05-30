import React,{useContext} from "react"
import {useParams} from "react-router-dom"
import {SeekerContext} from "../../context/SeekerContext"
import {ItemList} from "../../components/ItemList/ItemList"

export const SearchResultsContainer = ()=>{
    const {result} = useContext(SeekerContext)

    return(
        result !== undefined ? <ItemList props = {result}/>:
        <div>No hay resultados para su búsqueda</div>
    )
}