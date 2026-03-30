import React,{useState} from "react";


const PracticeProject = () => {
    const [tasks,setTask] = useState([])

    const [singleTask,setSingleTask] = useState("")
    const [error,setError] = useState(false)

    const addTask = () => {
        if(singleTask.trim() === ""){
            setError(true)
            // alert("Please enter any task!")
            return
        }
        setTask([...tasks,singleTask])
        setSingleTask("")
        setError(false)
        
    }

   const deleteTask = (indexPara) => {
    setTask(tasks.filter((item,i) => i !== indexPara ))
   }

    return (
        <div style={{padding:"20px",margin:"15px",border:"2px solid lightGrey",borderRadius:"10px"}} >
            <h2>React 3 Days Grand Project</h2>
            <h3 style={{color: tasks.length > 5 ? "red":"green"}} >Total Tasks {tasks.length} </h3>
            <input type="text" name="task"
            placeholder="Add new task here"
            onChange={(e) => setSingleTask(e.target.value)}
            value={singleTask}
            />
            {error && <p style={{color:"red"}} >Please enter a task!</p>}
            <br /> <br />
            <button onClick={addTask}
             style={{marginTop:"10px",padding:"10px", backgroundColor:"limegreen"}}
            >
                Add Task</button>
            
            {tasks.length > 0 ? (
                <ul>
                {tasks.map((item,index) => (
                    <li key={index} style={{listStyle:"none"}} > {item}
                        
                    <button onClick={() => deleteTask(index)} style={{backgroundColor:"Red",marginBottom:"5px"}} >Delete</button>

                     </li>
                ))}
            </ul>
            ) : (
                <p>No tasks added! Add your first task:)</p>
            )}

            

        </div>
    )

}

export default PracticeProject


