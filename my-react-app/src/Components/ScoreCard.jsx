import { useState } from "react"

function ScoreCard({title}) {
    const [score,setScore] = useState(0)

    return(
        <div style={{marginTop:"30px",padding:"20px",border:"2px dashed black",borderRadius:"10px"}}>
            <h2>{title} {score} </h2>
            <button onClick={() => setScore(score + 1)}>Increase</button>
            <button onClick={() => setScore(score -1)}>Decrease</button>
        </div>
    )
}

export default ScoreCard



// import { useState } from "react"

// function ScoreCard() {
    
//     const [score, setScore] = useState(0) 

//     return(
//         <div style={{marginTop:"30px", padding:"20px", border:"2px dashed green", borderRadius:"10px"}}>
//             <h2>My Score {score} </h2>
//             <button onClick={() => setScore(score + 1)}>Increase</button>
//             <button onClick={() => setScore(score - 1)}>Decrease</button>
//         </div>
//     )
// }

// export default ScoreCard