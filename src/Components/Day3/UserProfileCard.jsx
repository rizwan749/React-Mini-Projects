import React,{useState} from "react";

const UserProfileCard = () => {
    const [user,setUser] = useState({
        fullName: "",
        City: "",
        Age: "",
        Contact: ""

    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!user.fullName || !user.Contact){
            alert(`Please fill the following fields to save profile!`)
            return
        }

        alert(`Data Saved!\nName : ${user.fullName} \n City : ${user.City}\n Age : ${user.Age}\nContact : ${user.Contact}`)

        setUser({fullName : "" ,City: "",Age:"",Contact:""})
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({...user,[name] : value})
    }


    return(
        <div style={{padding:"20px"}} >
            <h2>User Profile Card</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="fullName"
                value={user.fullName}
                placeholder="Enter Your Name here"
                onChange={handleChange}
                />
                <br />
                <input type="text"
                name="City"
                value={user.City}
                placeholder="Enter Your City here"
                onChange={handleChange}
                />
                <br />
                <input type="text"
                name="Age"
                value={user.Age}
                placeholder="Enter Your Age here"
                onChange={handleChange}
                />
                <br />
                <input type="text"
                name="Contact"
                value={user.Contact}
                placeholder="Enter Your Contact here"
                onChange={handleChange}
                />
                <br />
                <button type="submit" style={{padding:"7px",backgroundColor:"limegreen",marginTop:"15px",fontSize:"18px"}} >Save Profile</button>
            </form>
        </div>
    )
}

export default UserProfileCard

