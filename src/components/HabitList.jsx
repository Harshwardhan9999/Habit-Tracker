import React from 'react'

const HabitList = () => {
    let habits = ["Habit 1", "Habit 2", "Habit 3"];
  return (
    <ul className='mt-3 w-[360px]'>
        {habits.map((habit, index) => <li key={index}>{habit}</li>)}
    </ul>
  )
}

export default HabitList