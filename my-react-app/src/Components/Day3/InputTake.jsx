import React,{useState} from "react";


const InputTake = () => {
    const [InputValue,setInputValue] = useState("")
    const [Age,setAge] = useState("")
    const [City,setCity] = useState("")


    return (
        <div style={{padding:"20px"}} >
            <h2>Form Practice</h2>
            <input type="text" 
            value = {InputValue}
            placeholder="Type anything"
            onChange={(e) => setInputValue(e.target.value)}
            />
            <br />
            <input type="text" 
            value = {City}
            placeholder="Enter your City"
            onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <input type="text" 
            value = {Age}
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
            />
            <p>You typed this <br /> <strong> {InputValue} </strong></p>
            <p>Your Name is  <br /> <strong> {City} </strong></p>
            <p>Your Age is  <br /> <strong> {Age} </strong></p>
        </div>
    )
}

export default InputTake