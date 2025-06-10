import { useState } from "react";

const NewHabit = ({addHabit}) => {
   
    const [habitName, setHabitName] = useState('');
    const [description, setDescription] = useState('');
  

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Habit Added: ", habitName, description);
      const newHabit = {
        name: habitName,
        description: description,
        id: Date.now(),
        isCompleted: false
      }
      setHabitName('');
      setDescription('');
      addHabit(newHabit);
      console.log(habitName);
    }

  return (
    <>
      <form
        className="flex m-0 flex-col w-[360px] p-3 mt-0"
        onSubmit={handleSubmit}
      >
      <h1 className="text-2xl mb-2">Add new habit</h1>
        <label className="form-label" htmlFor="habitName">
          Name
        </label>
        <input
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          id="habitName"
          className="form-input"
          type="text"
          name="habitName"
        />
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          id="description"
          className="form-input"
          type="text"
          name="description"
        />
        <button
          type="submit"
          className="
        bg-[#393D3F] rounded border-2 mt-3 text-amber-50
        px-3 py-1 hover:bg-[#111111]
        "
        >
          add
        </button>
      </form>
    </>
  );
  
};

export default NewHabit;

