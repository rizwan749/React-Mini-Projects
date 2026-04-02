import { memo } from "react";


const TodoItem = ({todo,deleteFun}) => {
    console.log(`The child re-renders ${todo}`)


    return(
        <div style={{padding:"10px",marginBottom:"5px",borderRadius:"10px"}} >
            {todo}
            <button onClick={deleteFun} style={{cursor:"pointer",marginLeft:"5px"}} > Delete </button>
        </div>
    )
}

export default memo(TodoItem)