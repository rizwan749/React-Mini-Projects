import React,{memo} from "react";

const ExpenseItem = ({name,amount,index,deleteFunc}) => {
    console.log("The child re-renders");


    return(
        <div className="expense-item">
            <div className="expense-info">
                <span className="expense-name">{name}</span>
                <span className="expense-amount">Rs. {amount}</span>
            </div>
            
            <button 
                onClick={() => deleteFunc(index, name)} 
                className="delete-btn"
            >
                Delete
            </button>
        </div>
    )
}

export default memo(ExpenseItem)