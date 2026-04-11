import React,{useState} from "react";


const RegisterForm = () => {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isSubmitted,setIsSubmitted] = useState(false)

    


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!username){
            alert(`Please Enter username`)
            return
        }
        if(!email.includes("@")){
            alert(`Please Enter valid email`)
            return
        }
        if(password.length < 6){
            alert(`Please Enter 6 numbers of password`)
            return
        }

        setIsSubmitted(true)
        if(isSubmitted){
            alert("Registration Successful! 🎉")
            setUsername("")
            setEmail("")
            setPassword("")
        }
        
        
    }


    return(
        <div>
            <form action="">
                <input type="text"
                placeholder="Enter your Name here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <br /><br />
                <input type="text" 
                placeholder="Enter Email @example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <input type="password" 
                placeholder="Enter password ***"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br /><br />
                <button onClick={handleSubmit} >Submit</button>
            </form>
        </div>
    )
}
export default RegisterForm