import React,{useState} from "react";


const PhoneSystem = () => {

    const Steps = [
        "Backup Data",
        "Unlock Bootloader", 
        "Flash Factory Image", 
        "Fix IMEI", 
        "Lock Bootloader"
    ];

    const [CompletedSteps,setCompletedSteps] = useState([])

    const trackSteps = (stepName) => {
        setCompletedSteps([...CompletedSteps,stepName])
    }


    return(
        <div style={{margin:"10px",padding:"20px"}} >
            <h2>Day-2 mini-project-II</h2>
            <h3>Tasks to Repair Phone System</h3>
            <ul>
                {Steps.map((step,index) => (
                <li key={index} style={{padding:"10px"}} > 
                {step}{}
                <button onClick={() => trackSteps(step)} disabled={CompletedSteps.includes(step)} style={{margin:"0 0 10px 15px"}} >
                    {CompletedSteps.includes(step) ? "Done ✅" : "Mark as Done"}
                </button>
                </li>
            ))}
            </ul>

            <hr />
            <h3>Completed Tasks</h3>
            {CompletedSteps.length === 0 ?(
                <p>Not any step is Completed yet</p>
            ):(
                <ul>
                    {CompletedSteps.map((step,index) => (
                        <li key={index} style={{margin:"0 0 10px 15px"}} >✅ {step}</li>
                    ))}
                </ul>
            )
        }

        </div>
    )


}

export default PhoneSystem

// git commit test
