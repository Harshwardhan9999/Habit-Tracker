import React from 'react'
import { Children } from 'react';
import { TiTick } from "react-icons/ti";



const Habit = ({habit, toggleComplete}) => {

  const toggle = () => {
    toggleComplete(habit.id);
  };



  return (
    
    (<li className="w-[360px] flex items-center border h-fit mb-2 rounded-xl pr-3 py-1 list-none">
      <button onClick={toggle}>
        <TiTick
          size={"1.5rem"}
          color="#393D3F"
          className="m-3 border-2 rounded-3xl"
        />
      </button>
      <div>
        <h2 className="text-xl">{habit.name}</h2>
        <p className="leading-4 mt-1 ">{habit.description}</p>
      </div>
    </li>)
  );
}

export default Habit