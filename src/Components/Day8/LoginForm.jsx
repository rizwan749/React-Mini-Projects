import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import NextPage from "./NextPage";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || password.length < 6) {
      return setError(`Please fill all the fileds!`);
    } else {
      alert(`Login successfull :)`);
      navigate("/nextpage");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center" >
    <form className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold text-center mb-6 text-grey-800" >Secret Valut</h2>
      
        <input
          type="email"
          value={email}
          placeholder="Enter your Email here"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password here ***"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        {error && <p style={{color:"red", fontWeight:"bold"}} > {error} </p>}
        <button onClick={handleSubmit} className="bg-green-500 text-white p4 rounded-full" >Submit</button>
      
    </form>
    </div>
  );
};

export default LoginForm;
