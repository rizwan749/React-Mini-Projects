import './App.css'
import WaterTracker from './Components/WaterTracker'
import ProductTracker from './Components/ProductTracker'
import ScoreCard from './Components/ScoreCard'
import GoalCard from './Components/GoalCard'
import ProductList from './Components/Day2/ProductList'
import TestPractice from './Components/Day2/TestPractice'
import PracticeTwo from './Components/Day2/TestPracticeTwo'
import ActivityTracker from './Components/Day2/ActivityTracker'
import PhoneSystem from './Components/Day2/PhoneSystemRepair'
import InputTake from './Components/Day3/InputTake'
import UserProfileCard from './Components/Day3/UserProfileCard'
import UserFeedbackForm from './Components/Day3/User Feedback Form'
import PracticeProject from './Components/3DaysGrandProject/PracticeProject'
import LiveClock from './Components/Day4/Day4UseEffect'
import WindowSizeTracker from './Components/Day4/WindowSizeTracker'
import UserList from './Components/Day4/UserList'
import SmartToggle from './Components/Day6/SmartToggle'
import TodoApp from './Components/Day6/TodoApp'

// folder renamed and files are updated

function App() {
  
  return (
    <div>
      <h1>Rizwan's Dashboard</h1>
      <p>GSoC prepration is going in the flow</p>
      
      {/* <ScoreCard title={"Git practice"} />
      <ScoreCard title={"React practice"} />
      <ProductTracker title={"Product Quantity"} />
      <ProductTracker title={"Customers"} />
      <WaterTracker target={10} />
      <WaterTracker target={6} />

      <GoalCard title={"Traweeh"} target={20} />
      <GoalCard title={"Water"} target={8} />
      <GoalCard title={"Quran"} target={1} />

      <hr />
      <ProductList />
      <TestPractice />
      <PracticeTwo />
      
      */}
      {/* <ActivityTracker />
      <PhoneSystem /> */}

        {/* <InputTake /> */}
      
      {/* <UserProfileCard /> */}
      {/* <UserFeedbackForm /> */}

      {/* <PracticeProject /> */}

      {/* <LiveClock /> */}

        {/* <WindowSizeTracker /> */}

      {/* <UserList /> */}

      {/* <SmartToggle /> */}

      <TodoApp />
      
    </div>
  )
}

export default App



// import './App.css'
// import ScoreCard from './ScoreCard'

// function App() {
//   return (
//     <div>
//       <h1>Rizwan's Dashboard</h1>
//       <p>GSoC preparation is going in the flow</p>
      
//       {/* Hum ne apna component yahan call kiya */}
//       <ScoreCard />
      
//       {/* Maze ki baat: Isay ek aur dafa likho! */}
//       <ScoreCard />
//     </div>
//   )
// }

// export default App