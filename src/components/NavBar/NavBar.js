import React from "react";
import './NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faHome} from '@fortawesome/free-solid-svg-icons';
import{faBars} from '@fortawesome/free-solid-svg-icons';
import{faTruck} from '@fortawesome/free-solid-svg-icons';
import{faCreditCard} from '@fortawesome/free-solid-svg-icons';
import{faCommentDots} from '@fortawesome/free-solid-svg-icons';
import{faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from "../CartWidget/CartWidget";






export const NavBar = ()=>{
       return (
    <>
        <nav className="nBar"> 
            <h1 className="tittle">ROOTS</h1>
            <li className="nBarLi">                    
                <ul className="nBarIt"><p className= "nBarLink"> <FontAwesomeIcon className="icon" icon={faHome}/>Inicio</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faBars}/>Categorías</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faTruck}/>Formas de envío</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faCreditCard}/>Medios de pago</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faCommentDots}/> Preguntas Frecuentes</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faPaperPlane}/>Contacto</p></ul>
            </li>
            <CartWidget/>
        </nav> 
    </>
    );
}
