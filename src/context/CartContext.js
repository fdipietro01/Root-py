import React, {useState,useEffect} from "react";

export const CartContext = React.createContext([]); 

export const CartItems = ({children})=>{

    
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [nroItems, setNroItems] = useState(0);
    const [buyer, setBuyer] = useState();

    useEffect(()=>{
        sumarTotal()
        calcNroItems()
    },[cart])

    const addDuplicated = (item, quantify)=> {
        const duplicated = cart.filter(x=> x.id === item.id);
        const newCart = cart.filter(x=> x.id !== item.id)
        duplicated[0].quantify = (parseInt(duplicated[0].quantify) + parseInt(quantify))
        console.log(duplicated)
        console.log(newCart)
        setCart([...newCart, ...duplicated])
        
    }

    const addItem = (item, quantify)=>{
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
        setTotal(acum)
    }

    const clearCart = ()=> setCart([]);

    const calcNroItems = ()=>{
        let acum = 0
        cart.map(x=> acum = acum + (x.quantify))
        setNroItems(acum)
    }

    const generarOrden = ()=>{
        if (buyer!==undefined && cart !== undefined){
        const orden = {buyer, cart, total}
        console.log (orden)
        }
    }
    

    return (
        <CartContext.Provider value={{cart, addDuplicated, addItem, setCart, isInCart, clearCart, removeIt, total, nroItems, setBuyer, generarOrden, buyer}}>
            {children}
            </CartContext.Provider>
    )      

}