import React from "react";
import "./SubMenu.css";
import {Link} from "react-router-dom";

export const SubMenu = ({classN})=>{
    return(
        <>
            <div className = {`subMenu ${classN}`}>
                <ul className="subMenuList">
                    <Link to={`/category/`} className="subMenuLink"><li className="subMenuItem">Plantas</li></Link>
                    <Link to={`/category/`} className="subMenuLink"><li className="subMenuItem">Macetas</li></Link>
                    <Link to={`/category/`} className="subMenuLink"><li className="subMenuItem">Semillas</li></Link>
                    <Link to={`/category/`} className="subMenuLink"><li className="subMenuItem">Sustratos</li></Link>
                    <Link to={`/category/`} className="subMenuLink"><li className="subMenuItem">Fertilizantes</li></Link>
                </ul>
            </div>
        </>
    )
 }