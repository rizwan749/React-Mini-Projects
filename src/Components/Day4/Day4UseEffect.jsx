import React,{useState} from "react";
import { useEffect } from "react";
import './style.css'


const LiveClock = () => {
    const [time,setTime] = useState(new Date().toLocaleTimeString())
    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        },1000)
        return  () => {
            clearInterval(intervalID)
        } 

    },[])


    return (
        <div className="clock-container">
            <div className="clock-box" >
                
                <h2 className="clock-title" >Current Time</h2>
                <div className="clock-time" > {time} </div>
            </div>
        </div>
    )
}


export default LiveClock