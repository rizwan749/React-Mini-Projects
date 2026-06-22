import React, { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'

const HabitTracker = () => {

    const [habitText,setHabitText] = useState("")
    const [habits,setHabits] = useState(() =>{
        const savedData = localStorage.getItem("userHabits");
        if(savedData){
           return JSON.parse(savedData)
        }
        else{
            return []
        }
    })

    const [filteredTab,setFilteredTab] = useState("All");

    let filteredHabits;
    if(filteredTab === "All"){
        filteredHabits = habits;
    }
    else if(filteredTab === "Active"){
        filteredHabits = habits.filter((habit) => habit.isCompleted === false)
    }
    else{
        filteredHabits = habits.filter((habit) =>  habit.isCompleted === true )
    }


    

    // useEffect(() => {
    //     // console.log("Data is loading...")
    //     const savedData = localStorage.getItem("userHabits")
    //     if(savedData){
    //         setHabits(JSON.parse(savedData));
    //     }
    // },[])

    useEffect(()=>{
        // console.log("Data is Saving...")
        localStorage.setItem( "userHabits" ,JSON.stringify(habits));
        
    },[habits])


    const handleAddHabit = () => {
        if(habitText !== ""){

              const habitObj = {
            id : Date.now(),
            text : habitText,
            isCompleted : false
        }

        setHabits([...habits,habitObj]);
        toast.success("Habit saved successfully")

        setHabitText("");

        // console.log( "Current Habit : " , habits)

        }
    }

    const handleDelete = (id) => {
        const filteredArr = habits.filter((habit) => (
            habit.id !== id
        )) 

        setHabits(filteredArr);
        toast.success("Habit deleted successfully")
    }


    const handleToggle = (id) => {
        const updatedHabits = habits.map((habit) => {
            if(habit.id === id){
                return{
                    ...habit,
                    isCompleted: !habit.isCompleted
                }

            }
            else{
                return habit
                
            }
        })

        setHabits(updatedHabits)
    }

    const totalHabits = habits.length;

    const completedHabits = habits.filter((habit) => habit.isCompleted === true).length;

    const progressPercentage = totalHabits === 0 ? 0 : Math.round((completedHabits / totalHabits) * 100);

    let totalXP = completedHabits * 10;

    if(totalXP > 0 && completedHabits === totalHabits ){
        totalXP += 50;
    }

    let currentLevel = 0;

    if(totalXP <= 250){
        currentLevel = Math.floor(totalXP / 50);
    }
    else{
        currentLevel = 5 + Math.floor((totalXP -250) / 100)
    }


  return (
    <div className='min-h-screen bg-gray-50' >
        <header className='flex justify-between bg-indigo-600 text-white pl-16 pr-16 p-5 '>
                <h1 className='font-bold text-xl' >Habit Tracker</h1>
                <p className='font-bold' > Level : {currentLevel} (XP : {totalXP})</p>
        </header>
        <Toaster position='top-right' />

        <div className='max-w-3xl mx-auto' >
            <div className='flex gap-5 bg-white border border-gray-200 p-6 max-w-3xl justify-between mt-4 rounded-xl ' >
                <input type="text"
                value={habitText}
                onChange={(e) => setHabitText(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handleAddHabit()
                    }
                }}
                placeholder='Add habit here...'
                className='outline-none border border-gray-300  rounded-xl flex-1 p-2' />
                <button className='bg-green-500 p-3  rounded-xl text-white cursor-pointer hover:bg-green-600' 
                onClick={handleAddHabit}

                >Add Habit</button>
            </div>

            <div className='bg-white rounded-xl p-4 mt-5 border border-gray-200' >
                <div className='flex justify-between items-center mb-3 ' >
                    <h2 className='text-gray-700 font-bold ' >Today's Progress</h2>
                    <span className='font-semibold text-green-600 text-sm ' > 
                        {completedHabits} / {totalHabits} Completed ({progressPercentage}%)
                    </span>
                </div>

                <div className='bg-gray-200 rounded-full w-full h-1.5 ' >
                    <div className='bg-green-600 rounded-full w-full h-1.5 transition-all duration-500 ease-out ' 
                    style={{width : `${progressPercentage}%`}}  ></div>
                    
                </div>

            </div>


                
            <div className='flex justify-center gap-4 mt-6 mb-4'>
                <button
                    onClick={() => setFilteredTab("All")}
                    className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        filteredTab === "All" 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    All
                </button>
                
                <button
                    onClick={() => setFilteredTab("Active")}
                    className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        filteredTab === "Active" 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    Active
                </button>
                
                <button
                    onClick={() => setFilteredTab("Completed")}
                    className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                        filteredTab === "Completed" 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    Completed
                </button>
            </div>



            {
                filteredHabits.length === 0 ? (
                <div>
                    <p className='text-center mt-16 text-gray-500 text-xl' >Not habit added yet! Start a new habit</p>
                </div>
                ) : (
                    <div className='mt-8 flex flex-col gap-4' >
                        {
                            filteredHabits.map((habit) => (
                                <div key={habit.id} className='flex justify-between items-center border border-gray-400 p-4 rounded-xl bg-white ' >
                                    <div className='flex gap-3 items-center' >
                                        <input type="checkbox" 
                                        checked={habit.isCompleted}
                                        onChange={() => handleToggle(habit.id)}
                                        className='h-5 w-5' />
                                        <p className='text-lg font-medium' > {habit.text} </p>
                                    </div>
                                    <button onClick={() => handleDelete(habit.id)} className='text-red-500 hover:bg-red-50 font-bold p-2 rounded-lg cursor-pointer' >
                                        Delete
                                    </button>

                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default HabitTracker