import React,{useState} from "react";

const TestPractice = () => {
    const skills = [
    { id: 1, name: "JavaScript" },
    { id: 2, name: "React JS" },
    { id: 3, name: "Git & GitHub" }
  ];


  const [mySkills,setMySkills] = useState([])

  const addNewSkill = (newSkill) =>{
    setMySkills([...mySkills,newSkill])
    alert(`New skill ${newSkill} added successfully.`)
  }

  return (
    <div style={{padding:"20px"}} >
        <h2>GSoC Skills Tracker</h2>
        <button onClick={ () => addNewSkill("React Js")} style={{padding:"10px 15px",cursor:"pointer",color:"white",backgroundColor:"blue",border:"0px",borderRadius:"10px"}} >
            Add 
        </button>
        <ul style={{marginTop:"20px",padding:"0",listStyle:"none",fontSize:"18px"}} >
            {mySkills.map((skills,index) => (
                <li key={index} style={{marginBottom:"10px"}} >✅ {skills} </li>
            ))}
        </ul>
    </div>
  );
};

export default TestPractice;