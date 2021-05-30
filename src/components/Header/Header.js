import React,{useContext} from "react";
import { Seeker } from "../../container/Seeker/Seeker";
import "./Header.css";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";
import { SeekerContext} from "../../context/SeekerContext"

export const Header = ()=>{

    const {reiniciarBusqueda} = useContext(SeekerContext)

    return(
        <>
            <header className="App-header">
                <div className="head">
                    <div className="tittleContainer">
                        <Link to={"/"} className="links"><button onClick={()=> reiniciarBusqueda()} className="tittle btn-neon">ROOTS</button></Link>
                        <Logo/>
                    </div>                    
                    <Seeker />
                </div>
    </header>
</>)}