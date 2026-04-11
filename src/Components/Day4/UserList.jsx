import React,{useState,useEffect} from "react";
import axios from "axios";
import './UserList.css';


const UserList = () =>{
    const [users,setUsers] = useState([])
    const [limit,setLimit] = useState(5)
    const [loading,setLoading] = useState(true)

    useEffect(() => {
       const fetchUser = async () => {
        try {
            setLoading(true)
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users?_limit=${limit}`)

            setUsers(response.data)
        } catch (error) {
            alert(`There is an error while fetching data ${error}`)
        }finally{
            setLoading(false)
        }
       }

       fetchUser()
    },[limit])

    return (
        <div className="user-container" >
            <h2 className="title" >User Directory</h2>
            <div style={{textAlign:"center",marginBottom:"10px"}} >
                <button onClick={ () => setLimit(3)} style={btnStyle} >Show 3</button>
                <button onClick={ () => setLimit(5)} style={btnStyle} >Show 5</button>
                <button onClick={ () => setLimit(10)} style={btnStyle} >Show 10</button>
            </div>
            {loading ? (
                <div style={{ textAlign: "center", fontSize: "1.5rem", color: "#3b82f6" }}>
                    <b>⏳ Data is loading...</b>
                </div>
            ) : (
                <div className="user-grid">
                    {users.map((user) => (
                        <div className="user-card" key={user.id}>
                            <h3 className="user-name"> {user.name} </h3>
                            <p className="user-email"> {user.email} </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}



const btnStyle = {
    padding: "10px 20px",
    margin: "0 10px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold"
};
export default UserList