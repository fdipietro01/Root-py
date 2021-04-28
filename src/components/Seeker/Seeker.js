import React from "react";
import './Seeker.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


export const Seeker = ()=>{
    return(
        <>
        <div className="seekerContainer">
            <input className="seeker" type="text" placeholder="Buscar productos..."></input>
            </div>
        <button className="iconSearch"><FontAwesomeIcon className="icon" icon={faSearch}/></button>
        </>
    )
}