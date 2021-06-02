import React, {useState, useEffect} from "react"
import {SubMenu} from "../../components/SubMenu/SubMenu"

export const SubMenuContainer = ({subMenu})=>{

const [className, setClassName]=useState("desactivate");

useEffect (()=>{
    let classId = "desactivate"
if (subMenu === true){classId="activate"} else {classId = "desactivate"};
setClassName(classId);
},[subMenu]);

return (
    <SubMenu className={className}/>
)

}