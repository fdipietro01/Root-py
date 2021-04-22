import React from "react";
import "./Logo.css"
import roots from "../../Assets/root.jpg";

export const Logo = () =>{
    return (
        <>
            <div className="logoCont">
                <img src={roots} className="App-logo" alt="logo" />
                <p className="welc">Roots Store ©</p>
            </div>
        </>
    )


}