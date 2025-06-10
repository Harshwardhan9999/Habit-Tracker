import React from 'react'
import { Children } from 'react';
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";



const Habit = ({habit, toggleComplete, deleteHabit, viewHabit}) => {

  const toggle = () => {
    toggleComplete(habit.id);
  };

  const viewH = () => {
    viewHabit(habit.id);
  }

  const deleteH = () => {
    deleteHabit(habit.id);
  }

  return (
    <div onClick={viewH} className="w-[360px] cursor-pointer relative flex items-center border h-fit mb-2 rounded-xl pr-3 py-1 list-none">
      <button onClick={toggle}>
        <TiTick
          size={"1.5rem"}
          color="#393D3F"
          className="m-3 border-2 rounded-3xl cursor-pointer"
        />
      </button>
      <div>
        <h2 className="text-xl">{habit.name}</h2>
        <p className="leading-4 mt-1 ">{habit.description}</p>
      </div>
      <button onClick={deleteH} className='absolute right-0'>
        <MdDeleteForever
          size={"1.5rem"}
          color="#393D3F"
          className="m-3 border-2 rounded-3xl cursor-pointer"
        />
      </button>
    </div>
  );
}

export default Habit