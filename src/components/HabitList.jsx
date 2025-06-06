import React from 'react'
import Habit from './Habit';

const HabitList = ({habits, toggleComplete, deleteHabit}) => {
    
  return (
    <ul className="mt-3 w-[360px] h-[80vh] overflow-auto">
      {habits.length > 0 && <h1 className='text-2xl mt-1'>Habits</h1>}
      {habits.filter(h => !h.isCompleted).map((habit) => (
        <Habit habit={habit} key={habit.id} toggleComplete={toggleComplete} deleteHabit={deleteHabit}/>
      ))}
    </ul>
  );
}

export default HabitList