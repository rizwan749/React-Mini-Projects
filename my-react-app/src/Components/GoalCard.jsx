import { useState } from "react";

function GoalCard({title,target}){
    const [progress,setProgress] = useState(0)

    const targetAchived = () => {
        if(progress == target){
            alert("Alhamdullilah target achived!")
        }
        else{
            setProgress(progress +1)
        }
    }

    return(
        <div style={{marginTop:"30px",padding:"20px",border:"2px dashed blue",borderRadius:"10px"}}>
            <h3> {title} </h3>
            <p> Progress: {progress} / {target} </p>
            <button onClick={targetAchived } >Add 1</button>
            <button onClick={() => setProgress(0)} >Reset</button>
        </div>
    )
}

export default GoalCard