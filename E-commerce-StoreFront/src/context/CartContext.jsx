/* eslint-disable react-refresh/only-export-components */

import  { createContext, useEffect, useState } from 'react';
import {toast, Toaster} from 'react-hot-toast'
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
            return JSON.parse(savedCart);
        } else {
            return [];
        }
    });
    const [wishListItems,setWishListItems] = useState(() => {
       const savedData = localStorage.getItem("wishListItems");

       if(savedData){
        return JSON.parse(savedData)
       }
       else{
        return []
       }
    })

    useEffect(() => {
        localStorage.setItem("wishListItems" , JSON.stringify(wishListItems))
    },[wishListItems])

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);


    const toggleWishlist = (product) => {

        const isExisting = wishListItems.find(item => item.id === product.id)

       if(isExisting){
         setWishListItems((prevItems) => prevItems.filter(item => item.id !== product.id));
        toast.error("Removed from wishlist!");
       }
       else{
        setWishListItems((prevItems) => [...prevItems, product]);
        toast.success("Added to wishlist successfully!");
       }
    }

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                return prevItems.map((item) => 
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (idToRemove) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== idToRemove));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart , wishListItems, toggleWishlist }}>
            {children}
        </CartContext.Provider>
    );
};