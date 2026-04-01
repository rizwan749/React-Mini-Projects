import React,{useEffect,useState} from "react";
import './WindowSizeTracker.css';


const WindowSizeTracker = () => {
    const [windowWidth,setWindowWitdh] = useState(window.innerWidth)

    useEffect(() => {
        const handleWidth = () => {
            setWindowWitdh(window.innerWidth)
        }

        window.addEventListener('resize',handleWidth)

        return () => {
            window.removeEventListener('resize',handleWidth);
        }
    },[])


    return (
        <div className="tracker-container" >
            <h2>Current Width</h2>
            <div className="width-display"> {windowWidth} </div>
        </div>
    )
}

export default WindowSizeTracker