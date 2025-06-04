
import './App.css'
import Habit from './components/Habit'
import HabitList from './components/HabitList'
import Header from './components/Header'
import NewHabit from './components/NewHabit'

function App() {

  return (
    <>
      <Header/>
      <div className="flex">
        <NewHabit/>
        <HabitList/>
        <Habit/>
      </div>
    </>
  )
}

export default App
