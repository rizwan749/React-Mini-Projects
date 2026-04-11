import React,{Children, createContext, useContext,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    const [confirm,setConfirm] = useState("");

    const addToCart = (product) => {
        setCart([...cart,product]);
        setConfirm(`${product} Added successfully:)`)

        setTimeout(() => {
            setConfirm("")
        },3000)
    }


    return (
        <CartContext.Provider value={{cart,addToCart,confirm}} >
            {children}
        </CartContext.Provider>
    )
}