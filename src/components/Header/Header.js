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
                        <Link to={"/"} className="links"><button className="tittle btn-neon">ROOTS</button></Link>
                        <Logo/>
                    </div>                    
                    <Seeker />
                </div>
    </header>
</>)}