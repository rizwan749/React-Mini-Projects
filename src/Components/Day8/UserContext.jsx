import React,{useState,userContext, Children, createContext} from "react";


export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [userName,setUserName] = useState("Rizwan");
    const [theme,setTheme] = useState("light");

    return (
        <UserContext.Provider value={{userName,setUserName,theme,setTheme}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContext