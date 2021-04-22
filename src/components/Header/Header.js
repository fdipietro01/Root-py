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
                    <Logo/>
                    <Seeker />
                </div>
            <NavBar />
    </header>
</>)}