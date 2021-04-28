import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Seeker } from "../Seeker/Seeker";
import "./Header.css";
import { Logo } from "../Logo/Logo";

export const Header = ()=>{
    return(
        <>
            <header className="App-header">
                <div className="head">
                    <div className="tittleContainer">
                        <h1 className="tittle">ROOTS</h1>
                        <Logo/>
                    </div>                    
                    <Seeker />
                </div>
            <NavBar />
    </header>
</>)}