import React,{useState} from "react";


const PracticeProject = () => {
    const [tasks,setTask] = useState([])

    const [singleTask,setSingleTask] = useState("")

    const addTask = () => {
        setTask([...tasks,singleTask])
        setSingleTask("")
    }

    // const handleChange = (e) => {
    //     const [name,value] = e.target;
    //     setSingleTask({...tasks,[name] : value })
    // }

    return (
        <div style={{padding:"20px",margin:"15px",border:"2px solid lightGrey",borderRadius:"10px"}} >
            <h2>React 3 Days Grand Project</h2>
            <input type="text" name="task"
            placeholder="Add new task here"
            onChange={(e) => setSingleTask(e.target.value)}
            value={singleTask}

            />
            <br /> <br />
            <button onClick={addTask}
             style={{marginTop:"10px",padding:"10px", backgroundColor:"limegreen"}}
            >
                Add Task</button>
            

            <ul>
                {tasks.map((item,index) => (
                    <li key={index} style={{padding:"7px"}} > {item} </li>
                ))}
            </ul>

        </div>
    )

}

export default PracticeProject