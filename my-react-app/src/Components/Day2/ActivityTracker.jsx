import React,{useState} from "react";

const ActivityTracker = () =>{

    const initialTasks = [
    "GSoC Prep (React)",
    "AI Theory Revision",
    "Tool Website Planning",
    "Quran Recitation"
  ];

  const [CompletedTasks,setCompletedTask] = useState([])

  const handleTasks = (taskName) =>{
    setCompletedTask([...CompletedTasks,taskName])
  }


    return (
        <div style={{padding:"20px",marginTop:"10px"}} >
            <h2>Day 2 mini-project-I</h2>
            <h3>Today's Tasks</h3>
            <ul>
                {initialTasks.map((item,index) => (
                    <li key={index} style={{marginBottom:"10px"}}  >
                        {item}{""}
                        <button onClick={() => handleTasks(item)} disabled={CompletedTasks.includes(item)} >
                            {CompletedTasks.includes(item) ? "Done ✅" : "Mark as Done" }
                        </button>
                    </li>
                ))}
            </ul>
            <hr />

                <h3>Completed Tasks:</h3>
                {CompletedTasks.length === 0 ? (
                    <p>Not a single task completed yet leave the lazziness!</p>
                ) : (
                    <ul>
                        {CompletedTasks.map((skill,index) => (
                            <li key={index} style={{marginBottom:"10px"}} >✅ {skill}</li>
                        ))}
                    </ul>
                )
            }

        </div>
    )
}


export default ActivityTracker