
import './App.css'
import Habit from './components/Habit'
import HabitList from './components/HabitList'
import Header from './components/Header'
import NewHabit from './components/NewHabit'
import { useEffect, useState } from 'react'
import CompletedHabitList from './components/CompletedHabitList';

function App() {

  const [habit ,setHabit] = useState(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits): [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habit));
  }, [habit])

  const addHabit = (newHabit) => {
    setHabit([...habit, newHabit])
  }

  const deleteHabit = (id) => {
    setHabit(
      habit.filter((habit) => 
        habit.id !== id
      )
    )
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
        <HabitList toggleComplete={toggleComplete} habits={habit} deleteHabit={deleteHabit}/>
        <CompletedHabitList toggleComplete={toggleComplete} habits={habit} deleteHabit={deleteHabit}/>
      </div>
    </>
  )
}

export default App
