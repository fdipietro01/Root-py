import React, {useState, useContext} from "react"
import {CartContext} from "../../context/CartContext"
import "./Userform.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const UserForm = ()=>{

    const setBuyer = useContext(CartContext)
    const [inputName, setInputName] = useState()
    const [inputMail1, setInputMail1] = useState()
    const [inputMail2, setInputMail2] = useState()
    const [inputPhone, setInputPhone] = useState()
    const [inputPass, setInputPass] = useState()
    const [errorVal, setErrorVal] = useState()

    const validarName = (e)=>{
        const nameRegex = /^[a-zA-Z '.-]*$/;
        if(e.target.value !== "" && nameRegex.test(e.target.value)){
            setInputName(e.target.value)
        }else{setInputName()}
    }

    const validarPhone = (e)=>{
        const phoneRegex = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        if(e.target.value !== "" && phoneRegex.test(e.target.value)){
            setInputPhone(e.target.value)
        }else{setInputPhone()}
    }

    const validarMail1 = (e)=>{
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(e.target.value !== "" && emailRegex.test(e.target.value))
            setInputMail1(e.target.value)
        else 
            setInputMail1()
    }

    const validarMail2 = (e)=>{
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(e.target.value !== "" && emailRegex.test(e.target.value) && e.target.value === inputMail1)
            setInputMail2(e.target.value)
        else 
            setInputMail2()
    }

    const validarPass = (e)=>{
        const PassRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/       ;
        if(e.target.value !== "" && PassRegex.test(e.target.value)){
            setInputPass(e.target.value)
        }else{setInputPass()}
    }

    const checkLog = ()=>{
        if (inputMail1 !== undefined && inputMail2 !== undefined && inputName !== undefined && inputPhone !== undefined && inputPass !== undefined){
            setErrorVal("Verified")
        const user = {
            name: inputName,
            mail:  inputMail1,
            phone: inputPhone,
        }
        setBuyer(user)
        }
        else{
            if(inputName ===undefined) setErrorVal(errorVal.push("Nombre incorrecto. Solo se permiten letras"))
            if(inputPhone ===undefined) setErrorVal(errorVal.push("Telefono incorrecto. Solo se permiten números"))
            if(inputMail1 ===undefined) setErrorVal(errorVal.push("E-mail incorrecto. Ingrese un formato valido. Ej juan123@gmail.com"))
            if(inputMail2 ===undefined) setErrorVal(errorVal.push("E-mail incorrecto. Ingrese un formato válido y asegurése de que los campos de e-mails conincidan"))
            if(inputPass ===undefined) setErrorVal(errorVal.push("Password incorrecto. Ingrese al menos 8 carácteres, incluyendo un carácter en máyuscula y un dígito, sin carácteres especiales"))

        }
    }

    return(
        <div className="formContainer">
            <p className="logTittle">Registrate para confirmar tu orden</p>
        <form className="form">
            <div className="formField">
                <label className="label">Nombre</label>
                <input className="input" type="text" onChange={(e)=>validarName(e)}></input> {inputName !== undefined && <span><FontAwesomeIcon className   ="tick" icon={faCheckCircle}/></span>}
            </div>
            <div className="formField">
                <label className="label">Teléfono</label>
                <input className="input" type="text" onChange={e=>validarPhone(e)}></input> {inputPhone !== undefined && <span><FontAwesomeIcon className   ="tick" icon={faCheckCircle}/></span>}
            </div>
            <div className="formField">
                <label className="label">Mail</label>
                <input className="input" type="text" name = "mail1" onChange={e=>validarMail1(e)}></input> {inputMail1 !== undefined && <span><FontAwesomeIcon className   ="tick" icon={faCheckCircle}/></span>}
            </div>
            <div className="formField">
                <label className="label label2" >Reingrese <p>el mail</p></label>
                <input className="input" type="text" name = "mail2"onChange={e=>validarMail2(e)}></input>{(inputMail2 !== undefined && inputMail1 !== undefined) && <span><FontAwesomeIcon className   ="tick" icon={faCheckCircle}/></span>}
            </div>
            <div className="formField">
                <label className="label label2">Contraseña</label>
                <input className="input" type="password" onChange={e=>validarPass(e)}></input> {inputPass !== undefined && <span><FontAwesomeIcon className   ="tick" icon={faCheckCircle}/></span>}
            </div>
            <button className="submitButton" onClick={checkLog}>Enviar</button> 
            {errorVal === "Verified"? <div><p>¡Registro Exitoso!</p> <p>Ya es posible enviar su ordern</p></div> :
            errorVal !== undefined && <div>{errorVal.map(x=> {return (<div> <FontAwesomeIcon className ="tick" icon={faTimesCircle}/> <span>${x}</span></div>)})}</div>}
        </form>

        </div>
    )
}