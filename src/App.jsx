
import './App.css'
import Habit from './components/Habit'
import HabitList from './components/HabitList'
import Header from './components/Header'
import NewHabit from './components/NewHabit'
import { useState } from 'react'

function App() {

  const [habitList ,setHabitList] = useState([]);

  const addHabit = (newHabit) => {
    setHabitList([...habitList, newHabit])
  }

  return (
    <>
      <Header/>
      <div className="flex">
        <NewHabit addHabit={addHabit}/>
        <HabitList habits={habitList}/>
      </div>
    </>
  )
}

export default App
