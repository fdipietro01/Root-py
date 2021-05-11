import React, {useEffect, useState} from "react";

export const CartContext = React.createContext([]); 

export const CartItems = ({children})=>{

    const [cart, setCart] = useState([]);

    useEffect(()=>{console.log(cart)}, [cart])

    const addDuplicated = (item, quantify)=> {
        const duplicated = cart.filter(x=> x.id === item.id);
        const newCart = cart.filter(x=> x.id !== item.id)
        duplicated[0].quantify = (parseInt(duplicated[0].quantify) + parseInt(quantify))
        console.log(duplicated)
        console.log(newCart)
        setCart([...newCart, ...duplicated])
        
    }

    const addItem = (item, quantify)=>{
        console.log(item.id)
        console.log(isInCart(item.id))
        isInCart(item.id)? addDuplicated(item, quantify) : setCart([...cart, {id: item.id, quantify: quantify}]) 
    }
    
    const isInCart = (id)=>{
    let isInCart = false;
    cart.forEach((x)=> {if(x.id === id) isInCart = true}) 
    return isInCart
    }

    const removeItem = (id)=>{
        cart.forEach((item,idx)=>{item.itemId === id && setCart(cart.splice(idx,1))})   
    }

    const clearCart = ()=> setCart([]);
    

    return (
        <CartContext.Provider value={{cart, addDuplicated, addItem, setCart, isInCart, clearCart}}>
            {children}
            </CartContext.Provider>
    )      

}