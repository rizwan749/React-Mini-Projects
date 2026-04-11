import React, {useState} from "react";
import TestPractice from "./TestPractice";


const PracticeTwo =() => {

    const [myTarget,setTarget] = useState(["CircuitVerse"]);

    const addTarget = (orgName) => {
        setTarget([...myTarget,orgName])
    };

    return(
        <div style={{padding:"20px"}} >
            <h2>My GSoC Orgnaizations</h2>
            <div style={{display:"flex",gap:"10px",marginBottom:"20px"}} >
                <button onClick={() => addTarget("Mozilla")} 
                style={{padding:"10px",backgroundColor:"black",color:"white",cursor:"pointer",borderRadius:"5px"}} >
                    Add Mozilla 
                </button>
                <button onClick={() => addTarget("wikimedia")} style={{padding:"10px",backgroundColor:"blue",color:"white",cursor:"pointer",borderRadius:"5px"}} >
                    Add Wikimedia
                </button>
            </div>

            <h2>Selected GSoC Orgnaizations :</h2>
            <ul style={{fontSize:"18px",listStyle:"none",padding:"0"}} >
                {myTarget.map((item,index) => (
                    <li key={index} style={{marginBottom:"10px"}} >
                    ✅{item}</li>
                ))}
            </ul>


        </div>
    )


}

export default PracticeTwo