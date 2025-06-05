
import './App.css'
import Habit from './components/Habit'
import HabitList from './components/HabitList'
import Header from './components/Header'
import NewHabit from './components/NewHabit'
import { useState } from 'react'
import CompletedHabitList from './components/CompletedHabitList';

function App() {

  const [habit ,setHabit] = useState([]);

  const addHabit = (newHabit) => {
    setHabit([...habit, newHabit])
  }

  const toggleComplete = (id) => {
    setHabit(
      habit.map((habit) =>
        habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
      )
    );
  };

  return (
    <>
      <Header/>
      <div className="flex gap-2">
        <NewHabit addHabit={addHabit}/>
        <HabitList toggleComplete={toggleComplete} habits={habit}/>
        <CompletedHabitList toggleComplete={toggleComplete} habits={habit}/>
      </div>
    </>
  )
}

export default App
