import React from "react";
import "./SubMenu.css";
import {Link} from "react-router-dom";

export const SubMenu = ({classN})=>{

    const id= ["plantas","macetas","semillas", "sustratos", "fertilizantes", "otros"];

    return(
        <>
            <div className = {`subMenu ${classN}`}>
                <ul className="subMenuList">
                    <Link to={`/category/${id[0]}`} className="subMenuLink"><li className="subMenuItem">Plantas</li></Link>
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