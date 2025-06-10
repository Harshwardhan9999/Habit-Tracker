
import { Stack, Button, Input, Field } from '@chakra-ui/react';
import { useState } from 'react';




const HabitCard = ({id, HabitName, Description, saveCard}) => {

    const [habitName, setHabitName] = useState(HabitName);
    const [description, setDescription] = useState(Description);

    console.log(HabitName);

    const formId = document.getElementById('form');
    const toggleCard = () => {
      formId.toggleAttribute('hidden');
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      saveCard(id, habitName, description);
    }


  return (
    <form id='form' className="border flex p-6 flex-col gap-4 m-auto h-64 rounded-2xl ">
      <h1 className="text-xl font-normal mb-2">Add new habit</h1>
      <div className="flex items-center font-light justify-between">
        <label className="form-label" htmlFor="habitName">
          Name
        </label>
        <input
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          id="habitName"
          className="border border-[rgb(199,203,211)] w-[280px] text-[16px] px-3 py-1 rounded"
          type="text"
          name="habitName"
        />
      </div>
      <div className="flex items-center font-light justify-between gap-3">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          className="border border-[rgb(199,203,211)] w-[280px] text-[16px] px-3 py-1 rounded"
          type="text"
          name="description"
        />
      </div>
      <div className="flex justify-around w-[280px] m-auto">
        <button
          onClick={toggleCard}
          type="submit"
          className="
          bg-[rgb(255,255,255)] rounded border-1 mt-3 text-black-50 border-[rgb(199,203,211)]
          px-3 py-1 hover:bg-[rgb(247,249,250)] w-[100px]
          "
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          type="submit"
          className="
          bg-[#393D3F] border-[#393d3f] rounded border-2 mt-3 text-amber-50
          px-3 py-1 hover:bg-[#111111] w-[100px]
          "
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default HabitCard