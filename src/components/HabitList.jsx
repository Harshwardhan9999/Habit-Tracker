import React from 'react'
import Habit from './Habit';

const HabitList = ({habits}) => {
    
  return (
    <ul className="mt-3 w-[360px] h-[80vh] overflow-auto">
      {habits.map((habit, index) => (
        <Habit habitName={habit.name} description={habit.description} key={index} />
      ))}
    </ul>
  );
}

export default HabitList