import React,{useState,useEffect, useMemo} from "react";
import './SmartToggle.css';


const SmartToggle = () => {
    const [text,setText] = useState("")
    const [isDarkTheme,setIsDarkTheme] = useState(false)

    const slowSearch = (searchProduct) => {
        console.log(`Searching for ${searchProduct} in Database.`)
        for(let i = 0;i<100000000;i++){}
        return `You have searched for ${searchProduct}`
    }


    useEffect(() => {
        if(isDarkTheme){
            document.body.classList.add('dark-mode')

        }
        else{
            document.body.classList.remove('dark-mode')
        }
    },[])


    const showReseult = useMemo(() => {
        return slowSearch(text);
    },[text])

    return (
        <div >
            <input type="text" name=""
            value={text}
            onChange={ (e) => setText(e.target.value)}
            />
            <p> Current Theme {isDarkTheme ? "Dark 🌙" : "Light ☀️"} </p>
            <button onClick={ () => setIsDarkTheme(!isDarkTheme)  } style={{padding:"10px",cursor:"pointer"}} > Click to change Theme </button>
            <h3> {showReseult} </h3>
        </div>
    )
}


export default SmartToggle;