import React, {useState,useEffect} from "react";

export const CartContext = React.createContext([]); 

export const CartItems = ({children})=>{

    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(()=>{console.log(cart)
    sumarTotal()},[cart])

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
        isInCart(item.id)? addDuplicated(item, quantify) : setCart([...cart, {...item, id: item.id, quantify: quantify}])
    }
    
    const isInCart = (id)=>{
    return cart.some((x)=> x.id === id) 
    }

    const removeIt = (id)=>{
        setCart(cart.filter(x=>x.id !== id))   
    }

    const sumarTotal = ()=>{
        let acum = 0
        cart.map(x=> acum = acum + (x.price*x.quantify))
        console.log(acum)
        setTotal(acum)
    }

    const clearCart = ()=> setCart([]);
    

    return (
        <CartContext.Provider value={{cart, addDuplicated, addItem, setCart, isInCart, clearCart, removeIt, sumarTotal, total}}>
            {children}
            </CartContext.Provider>
    )      

}