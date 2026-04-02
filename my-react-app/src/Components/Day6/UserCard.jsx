import React, {memo, useMemo} from "react";


const UserCard = ({username,onlogout}) => {
    console.log(`The User Card Re-renders`)



    return (

        <div style={{margin:"10px",padding:"20px" }} >
            <button onClick={onlogout} style={{padding:"10px",cursor:"pointer",margin:"7px"}} > Logout </button>
        </div>
    )
}


export default memo(UserCard)