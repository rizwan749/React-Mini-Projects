import React,{useState,useEffect,useCallback,useMemo} from "react";
import TodoItem from "./TodoItem";
import './TodoApp.css';

const TodoApp = () => {
    const [todo,setTodos] = useState(["","",""])
    const [isDark,setIsDark] = useState(false)
    const [newTask,setNewTask] = useState("")


    const addTodo = () => {
        if(newTask !== ""){
            setTodos([...todo,newTask])
            setNewTask("")
        }
    }


    const deleteTodo = useCallback(() => {
        console.log("Delete Button Clicked")
    },[])

    useEffect(() => {
        if(isDark){
            document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')
        }
    },[isDark])





    return (
        <div >
            <h2> Use Callback test </h2>

            <input type="text" 
            placeholder="Add new task..."
            value={newTask}
            style={{padding:"10px",width:"200px"}}
            onChange={ (e) => setNewTask(e.target.value) }
            
            />
            <br /><br />

            <button onClick={addTodo} style={{padding:"10x",cursor:"pointer"}} >Add new task</button>
            <br /><br />

            <button onClick={() => setIsDark(!isDark)} style={{padding:"10px",cursor:"pointer"}} > Toggle the Theme </button>
            <br /><br />

            {todo.map((item,index) => (
                <TodoItem 
                key={index}
                todo={item}
                deleteFun={deleteTodo}
                />
            ))}


        </div>
    )
}


export default TodoApp