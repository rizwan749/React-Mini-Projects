import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { UserProvider } from "./Components/Day8/UserContext";

import "./App.css";
import WaterTracker from "./Components/WaterTracker";
import ProductTracker from "./Components/ProductTracker";
import ScoreCard from "./Components/ScoreCard";
import GoalCard from "./Components/GoalCard";
import ProductList from "./Components/Day2/ProductList";
import TestPractice from "./Components/Day2/TestPractice";
import PracticeTwo from "./Components/Day2/TestPracticeTwo";
import ActivityTracker from "./Components/Day2/ActivityTracker";
import PhoneSystem from "./Components/Day2/PhoneSystemRepair";
import InputTake from "./Components/Day3/InputTake";
import UserProfileCard from "./Components/Day3/UserProfileCard";
import UserFeedbackForm from "./Components/Day3/User Feedback Form";
import PracticeProject from "./Components/3DaysGrandProject/PracticeProject";
import LiveClock from "./Components/Day4/Day4UseEffect";
import WindowSizeTracker from "./Components/Day4/WindowSizeTracker";
import UserList from "./Components/Day4/UserList";
import SmartToggle from "./Components/Day6/SmartToggle";
import TodoApp from "./Components/Day6/TodoApp";
import Dashboard from "./Components/Day6/Dashboard";
import ExpenseApp from "./Components/6 Days grand project(Expense Tracker)/ExpenseApp";
import RegisterForm from "./Components/Day7/RegisterForm";
import Home from "./Components/Day8/ReactRouterDom";
import About from "./Components/Day8/About";
import Contact from "./Components/Day8/Contact";
import LoginForm from "./Components/Day8/LoginForm";
import NextPage from "./Components/Day8/NextPage";
import { CartContext } from "./Components/Day9/CartContext";
import { CartProvider } from "./Components/Day9/CartContext";
import Navbar from "./Components/Day9/Navbar";
import Store from "./Components/Day9/Store";
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

      {/* <TodoApp />

      <Dashboard /> */}

      {/* <ExpenseApp /> */}

      {/* <RegisterForm /> */}

      {/* <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/nextpage" element={<NextPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider> */}


        <CartProvider>
          <Navbar />
          <Store />
        </CartProvider>

    </div>
  );
}

export default App;

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
