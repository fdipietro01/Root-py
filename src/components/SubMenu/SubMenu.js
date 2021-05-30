import React, {useState, useEffect, useContext} from "react";
import "./SubMenu.css";
import {Link} from "react-router-dom";
import {SeekerContext} from "../../context/SeekerContext"

export const SubMenu = ({classN})=>{
    const [className, setClassName]=useState("desactivate");
    const id= ["plantas","macetas","semillas", "sustratos", "fertilizantes", "otros"];
    const {reiniciarBusqueda} = useContext(SeekerContext)
    
    useEffect (()=>{
        let classId = "desactivate"
    if (classN === true){classId="activate"} else {classId = "desactivate"};
    setClassName(classId);
    },[classN]); 
          

    return(
        <>
            <div className = {`subMenu ${className}`}>
                <ul className="subMenuList"onClick={()=> reiniciarBusqueda()}>
                    <Link to={`/category/${id[0]}`} className="subMenuLink"><li className="subMenuItem" onClick={()=> reiniciarBusqueda()}>Plantas</li></Link>
                    <Link to={`/category/${id[1]}`} className="subMenuLink"><li className="subMenuItem">Macetas</li></Link>
                    <Link to={`/category/${id[2]}`} className="subMenuLink"><li className="subMenuItem">Semillas</li></Link>
                    <Link to={`/category/${id[3]}`} className="subMenuLink"><li className="subMenuItem">Sustratos</li></Link>
                    <Link to={`/category/${id[4]}`} className="subMenuLink"><li className="subMenuItem">Fertilizantes</li></Link>
                    <Link to={`/category/${id[5]}`} className="subMenuLink"><li className="subMenuItem">Otros</li></Link>
                </ul>
            </div>
        </>
    )
 }