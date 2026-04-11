import React from "react";
import { useContext,useState } from "react";
import { UserContext } from "./UserContext";

const NextPage = () => {
    const {userName,theme,setTheme} = useContext(UserContext)


   const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
            <h1 className={`text-4xl font-bold mb-4 ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`} >
                Secret Vault
            </h1>
            <h2 className="text-2xl font-semibold mb-8" >
                welcom boss <span className="text-green-500" > {userName} </span>!
            </h2>
            <button 
            onClick={toggleTheme}

            className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all hover:scale-105 ${theme === "dark" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`} >
                {theme === "light" ?"🌙Turn the Dark Mode" :"☀️Turn the Light Mode" }
            </button>
        </div>
    )
}

export default NextPage