import React, {useState, useContext} from "react"
import {CartContext} from "../../context/CartContext"
import "./Userform.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export const UserForm = ()=>{

    const {setBuyer} = useContext(CartContext)
    const {buyer} = useContext(CartContext)
    const [input, setInput] = useState({})
    const [error,setError] =useState({})
    const [errorReg,setErrorReg] =useState()  


    const validarName = (e)=>{
        const nameRegex = /^[a-zA-Z '.-]*$/;
        if(e.target.value === ""){  
            setError({...error,name:undefined})
        }else{
            if(nameRegex.test(e.target.value)){
                setInput({...input,name:e.target.value})
                setError({...error,name:false})
            }else{setInput({...input,name:undefined})
                setError({...error, name:true})}
        }
    }

    const validarPhone = (e)=>{
        const phoneRegex = /^([0-9])*$/;
        if(e.target.value === ""){
            setError({...error,phone:undefined})
        } else {
            if(phoneRegex.test(e.target.value)){
                setInput({...input,phone:e.target.value})
                setError({...error,phone:false})
            }else{setInput({...input,phone:undefined})
            setError({...error,phone:true})}
        }
    }

    const validarMail1 = (e)=>{
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(e.target.value === ""){
            setError({...error,mail1:undefined})
        } else{
            if(emailRegex.test(e.target.value)){
                setInput({...input, mail1:e.target.value})
                setError({...error,mail1:false})
            }else{setInput({...input,mail1:undefined})
            setError({...error,mail1:true})}
        }
    }

    const validarMail2 = (e)=>{
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if(e.target.value === ""){
            setError({...error,mail2:undefined})
        } else{
            if(emailRegex.test(e.target.value) && e.target.value === input.mail1){
                setInput({...input, mail2:e.target.value})
                setError({...error,mail2:false})
            }else{setInput({...input, mail2:undefined})
            setError({...error,mail2:true})}
        }
    }


    const validarPass = (e)=>{
        const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/       ;
        if(e.target.value === ""){
            setError({...error,pass:undefined})
        } else{
            if(passRegex.test(e.target.value)){
               setInput({...input,pass:e.target.value})
               setError({...error, pass:false})
        }else{setInput({...input,pass:undefined})
            setError({...error, pass:true})}
        }
    }

    const checkLog = ()=>{
        if(input.name !== undefined && input.phone !== undefined && input.mail1 !== undefined && input.mail2 !== undefined && input.pass !== undefined ) { 
        const user = {
            name: input.name,
            mail:  input.mail1,
            phone: input.phone,
            pass: input.pass,
        }
        setBuyer({...user})
        } else setErrorReg(true)
    }

    const nuevoRegistro =()=>{
        setBuyer()
        setInput({})
    }

    return(
        
        <div className={`formContainer ${buyer!== undefined && "formContainer2"}`}>
            <p className="logTittle">Registrate para confirmar tu orden</p>
            {buyer === undefined? 
            <>
            <form  onSubmit={(e)=>e.preventDefault()} action="#" className="form">
               
            <div className="formField">
                <label className="label">Nombre</label>
                <div className="inputBox">
                    <input disabled={errorReg===true} className="input" type="text" onBlur={(e)=>validarName(e)}></input> 
                    {(input.name !== undefined && error.name === false) && 
                        <span><FontAwesomeIcon className  ="tick" icon={faCheckCircle}/></span>}
                </div>   
            </div>
            <div className="a">{(error.name === true) &&
                    <p className ="wrong">Nombre no válido! Ingrese solamente letras.</p>}
                </div>


            <div className="formField">
                <label className="label">Teléfono</label>
                <div className="inputBox">
                    <input disabled={errorReg===true} className="input" type="text" onBlur={e=>validarPhone(e)}></input> 
                    {(input.phone !== undefined && error.phone === false) && 
                        <span><FontAwesomeIcon className  ="tick" icon={faCheckCircle}/></span>}
                </div>   
            </div>
            <div className="a">{(error.phone === true) &&
                    <p className ="wrong">Teléfono no válido! Solo se permiten dígitos.</p>}
                </div>


            <div className="formField">
                <label className="label">Mail</label>
                <div className="inputBox">
                    <input disabled={errorReg===true} className="input" type="text" name = "mail1" onBlur={e=>validarMail1(e)}></input> 
                    {(input.mail1 !== undefined && error.mail1 === false) && 
                        <span><FontAwesomeIcon className  ="tick" icon={faCheckCircle}/></span>}
                </div>   
            </div>
            <div className="a">{(error.mail1 === true) &&
                    <p className ="wrong">E-mail incorrecto. Ingrese un formato valido.</p>}
                </div>

            <div className="formField">
                <label className="label label2" >Reingrese <p>el mail</p></label>
                <div className="inputBox">
                    <input disabled={errorReg===true} className="input" type="text" name = "mail2"onBlur={e=>validarMail2(e)}></input>
                   {(input.mail2 !== undefined && error.mail2 === false) && 
                        <span><FontAwesomeIcon className  ="tick" icon={faCheckCircle}/></span>}
                </div>   
            </div>
            <div className="a">{(error.mail2 === true) &&
                    <p className ="wrong">E-mail incorrecto. No coincide/formato valido.</p>}
                </div>


            <div className="formField">
                <label className="label label2">Contraseña</label>
                <div className="inputBox">
                    <input disabled={errorReg===true} className="input" type="password" onBlur={e=>validarPass(e)}></input> 
                    {(input.pass !== undefined && error.pass === false) && 
                        <span><FontAwesomeIcon className  ="tick" icon={faCheckCircle}/></span>}
                </div>   
            </div>
            <div className="a">{(error.pass === true) &&
                <div>
                    <p className ="wrong w2">Formato no válido. Ingrese al menos</p> <p className="wrong w2">(1) minúscula, (1) mayúscula y (1) dígito.</p>
                </div>}
                </div>
            <button className="submitButton" onClick={checkLog}>Enviar</button>
            {errorReg === true && <div className="modalCont">
                                    <div className="modal">
                                       <p className="band"> 
                                        <span className="tick2Cont"><FontAwesomeIcon className  ="tick2" icon={faTimesCircle}/> </span><span className="ror">Error! datos de registro inválidos</span>
                                       </p> 
                                       <button className="acceptButton" onClick={()=>setErrorReg(false)}>Aceptar</button>
                                    </div>
                                  </div>}    
        </form>
            </> : 
            <div className="succes">
                <div className="regSuc">Registro exitoso! </div> 
                <div>
                <p className="leyend">Para deshacer el registro y hacer uno nuevo para realizar su pedido, seleccione nuevo registro </p>
                </div>
                <button onClick={()=>nuevoRegistro()} className="acceptButton">Nuevo Registro</button>
            </div>}
        </div>
       
    )
}