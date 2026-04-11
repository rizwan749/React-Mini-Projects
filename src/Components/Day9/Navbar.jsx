import React,{useContext} from "react";
import { CartContext } from "./CartContext";

const Navbar = () => {
    const {cart} = useContext(CartContext)

    return(
        <nav className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md" >
            <h1 className="text-2xl font-bold italic" >
                Rizwan's Store
            </h1>
            <div className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold" >
                🛒 Cart: {cart.length}
            </div>
        </nav>
    )
}

export default Navbar