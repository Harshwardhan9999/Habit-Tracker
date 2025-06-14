import React from 'react'
import { Children } from 'react';
import { TiTick } from "react-icons/ti";
import { MdDeleteForever } from "react-icons/md";
import { ToastContainer, toast, Bounce } from 'react-toastify';



const Habit = ({habit, toggleComplete, deleteHabit, viewHabit}) => {

  const toastCompleted = () =>
    toast.success("Habit marked completed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  // 
  const toastDelete = () =>
    toast.error("Habit deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const toggle = () => {
    toggleComplete(habit.id);
    !habit.isCompleted && toastCompleted();
  };

  const viewH = () => {
    viewHabit(habit.id);
  }

  const deleteH = () => {
    deleteHabit(habit.id);
    toastDelete();
  }

  const getStreak = () => {
    const today = new Date();
    let streak = 0;

    for (let i = 0; i < 365; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split("T")[0];
      if ((habit.completedDates || []).includes(dateStr)) streak++;
      else break;
    }
    return streak;
  }

  return (
    <div className="w-[360px] cursor-pointer relative flex items-center border h-fit mb-2 rounded-xl pr-3 py-1 list-none">
      <button onClick={toggle}>
        <TiTick
          size={"1.5rem"}
          color="#393D3F"
          className="m-3 border-2 rounded-3xl cursor-pointer"
        />
      </button>
      <div onClick={viewH} className='w-full'>
        <div className="flex gap-3 items-center">
          <h2 className="text-xl">{habit.name}</h2>
          <p>Streak: {getStreak()}</p>
        </div>
        <p className="leading-4 mt-1 ">{habit.description}</p>
      </div>
      <button onClick={deleteH} className="absolute w-[48px] right-0">
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