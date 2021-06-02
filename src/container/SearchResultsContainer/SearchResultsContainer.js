import React,{useContext} from "react"
import "./SearchResultsContainer.css"
import {SeekerContext} from "../../context/SeekerContext"
import {Item} from "../../components/Item/Item"
import {Loader} from "../../components/Loader/Loader"

export const SearchResultsContainer = ()=>{
    const {result} = useContext(SeekerContext)
    const {buscado} = useContext(SeekerContext)
    


    return(
    <>
        {console.log(result)}
        {result === undefined && 
        <Loader mensaje ={"Buscando"}/>}
        {result !== undefined && result.length > 0 ?
        <div className="catalogoCont">
            <div className="body">
                <div className="productListBox2">
                    <p className="resulTittle">Resultados para "{buscado}"...</p> 
                    <div className = "aux">    
                        {result.map((item)=>
                           <div key={item.id} className="productBox"> <Item id={item.id} url={item.url} name={item.name} kind={item.kind} price={item.price} stock={item.stock}/></div>)}
                    </div>
                </div>
            </div>
        </div> :
        <div className="boxi">
            <div className="noResults">Parece que no hay resultados para su búsqueda...</div>
        </div>}
        </>
    )
}