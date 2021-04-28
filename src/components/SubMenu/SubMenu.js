import React from "react";
import "./SubMenu.css";


export const SubMenu = ({classN})=>{
    return(
        <>
            <div className = {`subMenu ${classN}`}>
                <ul className="subMenuList">
                    <li className="subMenuItem">Plantas</li>
                    <li className="subMenuItem">Macetas</li>
                    <li className="subMenuItem">Semillas</li>
                    <li className="subMenuItem">Sustratos</li>
                    <li className="subMenuItem">Fertilizantes</li>
                </ul>
            </div>
        </>
    )
 }