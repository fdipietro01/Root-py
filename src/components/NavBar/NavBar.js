import React, {useState, useEffect} from "react";
import './NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{faPaperPlane, faCommentDots, faTruck, faBars, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from "../CartWidget/CartWidget";
import {SubMenu} from "../SubMenu/SubMenu";


export const NavBar = ()=>{
    const [subMenuActivate, setSubMenuActivate] = useState(false);
    const [className, setClassname] = useState("desactivate");

    useEffect (()=>{
        setClassname("desactivate")
    },[])
    const handleSubMenu = ()=>{
        setSubMenuActivate(!subMenuActivate);
        if(subMenuActivate === true) {setClassname("activate")} else {setClassname("desactivate")};  
    }


       return (
    <>  
        <nav className="nBar"> 
            
            <li className="nBarLi">                    
                <ul className="nBarIt" onClick={handleSubMenu}><p className= "nBarLink" ><FontAwesomeIcon className="icon" icon={faBars}/>Categorías</p><SubMenu classN={className}/></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faTruck}/>Formas de envío</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/>Nuestro Local</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faCommentDots}/> Preguntas Frecuentes</p></ul>
                <ul className="nBarIt"><p className= "nBarLink"><FontAwesomeIcon className="icon" icon={faPaperPlane}/>Contacto</p></ul>
            </li>
            <CartWidget/>
        </nav> 
    </>
    );
}
