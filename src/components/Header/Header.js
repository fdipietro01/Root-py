import React from "react";
import { Seeker } from "../Seeker/Seeker";
import "./Header.css";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

export const Header = ()=>{
    return(
        <>
            <header className="App-header">
                <div className="head">
                    <div className="tittleContainer">
                        <Link to={"/"} className="links"><h1 className="tittle btn-neon">ROOTS</h1></Link>
                        <Logo/>
                    </div>                    
                    <Seeker />
                </div>
    </header>
</>)}