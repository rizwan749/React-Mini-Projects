import React,{useCallback,useEffect,useMemo,useState} from "react";
import UserCard from "./UserCard";
import './Dasboard.css'


const Dashboard = () => {
    const [count,setCount] = useState(0)


    const heavyResult = useMemo (() => {
        console.log(`Heavy loop is working on!`)

        for(let i = 0;i<100000000;i++){}
            return `Server condition Excellent.`;
        
    },[])



    const handleLogout = useCallback (() => {
        // console.log(`User logged out:)`)
        alert("User logged out :)")
        
    },[])

    return(
        <div style={{margin:"15px",padding:"20px",border:"2px solid grey",borderRadius:"10px"}} >
            <h2>Mini Dashboard</h2>
            <p> {count} </p>
            <button onClick={()  => setCount(count + 1)} style={{cursor:"pointer"}} > Count </button>
            <hr />
            {heavyResult}

            <UserCard 
            username={"Rizwan"}
            onlogout={handleLogout}
            />
            
        </div>
    )
}

export default Dashboard