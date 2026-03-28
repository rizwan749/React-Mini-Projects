import React, {useState} from "react";

const UserFeedbackForm = () => {
    const [feedBack,setFeedBack] = useState({
        userName : "",
        category : "general",
        message : "",
        rating : 5
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFeedBack({...feedBack,[name] : value}) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you ${feedBack.userName}! Your ${feedBack.category} feedback is valuable for us.`);
        // Form reset karne ke liye:
        setFeedBack({ userName: "", category: "general", message: "", rating: 5 });
    }


    return (
        <div style={{padding:"20px",border:"1px solid lightGray",borderRadius:"10px",maxWidth:"400px"}} >
            <h2>User Feedback Form</h2>
            <form onSubmit={handleSubmit}>

                <input type="text" name="userName" 
                value={feedBack.userName}
                placeholder="Enter your name here"
                onChange={handleChange}
                />

                <br /> <br />

                <select name="category" onChange={handleChange}
                value={feedBack.category}
                >
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Request Feature</option>
                </select>
                <br /><br />
                <label>Rating 1-5</label>
                <input type="number"
                name="rating"
                min={1} max={5}
                value={feedBack.rating}
                onChange={handleChange}
                />

                <br />  <br />
                <textarea name="message" 
                value={feedBack.message}
                placeholder="you can describe you problem while interacting to our system"
                onChange={handleChange}
                ></textarea>
                <br /><br />

                <button type="submit">Submit Feedback</button>

            </form>
        </div>
    )
}


export default UserFeedbackForm