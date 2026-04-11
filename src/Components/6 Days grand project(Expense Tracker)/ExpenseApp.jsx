import React,{useState,useMemo,useEffect,useCallback} from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseApp.css';


const ExpenseApp = () => {

    //states to save things in memory that react can remember

    const [name,setName] = useState("")
    const [amount,setAmount] = useState(0)
    const [list,setList] = useState( () => {
        const savedData = localStorage.getItem("myExpenses")
        if(savedData){
            return JSON.parse(savedData)
        }
        else{
            return []
        }
    } )


    //Add new expense function

    const addExpense = () => {
        if(name === "" || amount === 0){
            alert(`Please fill the Name and Amount first!`)
            return
        }

        const newItem  = {itemName : name, itemPrice : Number(amount)}

        setList([...list,newItem]);

        setName("")
        setAmount(0)

    }

    //the calculator function

    const Calculator = useMemo (() => {
        console.log(`Calculating the Grand Total..`)
        return list.reduce((acc,item) => {
            return acc + item.itemPrice;
        },0)
    },[list])

    //delete function

    const deleteExpense = useCallback ((idToDel,nameToDel) => {
        
        setList((list) => list.filter((item,index) => index !== idToDel ))
        alert(` ${nameToDel}  deleted Successfully:)`)
    },[])

    //saving data to local storage


    useEffect(() => {
        localStorage.setItem("myExpenses",JSON.stringify(list))
    },[list])



    return (
        <div className="app-container" >
            <h2 className="header-title">Expense Tracker</h2>
            <div className="total-box">
                <h4>Grand Total {Calculator} </h4>
            </div>
            <div className="input-section" >
            <div className="input-row" >
                <input type="text" 
                placeholder="Add Expense Here"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field name-input"
                />
                <input type="number" 
                placeholder="Add Amount Here"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="input-field amount-input"
                
                />
                

            </div>
                <button onClick={addExpense} className="add-btn" >
                    Add Expense
                </button>
            </div>

            <div className="list-section">
                {list.map((item,index) => (
                    <ExpenseItem
                    key={index}
                    index={index}
                    name={item.itemName}
                    amount={item.itemPrice}
                    deleteFunc={deleteExpense}
                    />
                ))}
            </div>

        </div>
    )


}


export default ExpenseApp;