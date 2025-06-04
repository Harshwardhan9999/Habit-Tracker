import React from 'react'
import { Children } from 'react';


const Habit = ({habitName, description}) => {
  return (
    <li className='w-[360px] mt-3 border h-fit rounded-xl px-3 py-2 list-none'>
        <h3 className='text-xl'>{habitName}</h3>
        <p className='leading-4 mt-1 '>{description}</p>
    </li>
  )
}

export default Habit