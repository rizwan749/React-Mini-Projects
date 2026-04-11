import { useState } from "react";

function WaterTracker({target}){
    const [glasses, setGlasses] = useState(0)



    return (
        <div style={{marginTop:"30px",padding:"20px",border:"2px solid blue",borderRadius:"10px"}}>
            <h2>Iftar to Sehar water tracker</h2>
            <p>Glasses Drink {glasses} </p>
            <h3 style={{color:"green"}} >{glasses >= target ? "Bravoooo! Target Achived" : ""}</h3>
            <button onClick={()=> setGlasses(glasses +1)} >
                
                Drink 1 Glass</button>
            <button onClick={ ()=> setGlasses(0)} >Reset</button>
        </div>
    )
}

export default WaterTracker