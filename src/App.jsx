import "./App.css";
import HabitCard from "./components/HabitCard";
import HabitList from "./components/HabitList";
import Header from "./components/Header";
import NewHabit from "./components/NewHabit";
import { useEffect, useState } from "react";
import CompletedHabitList from "./components/CompletedHabitList";

function App() {
  const [habit, setHabit] = useState(() => {
    const storedHabits = localStorage.getItem("habits");
    return storedHabits ? JSON.parse(storedHabits) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habit));
  }, [habit]);

  const [viewedHabit, setViewedHabit] = useState("");
  const viewHabit = (id) => {
    setViewedHabit(habit.find((habit) => habit.id === id));
  };

  const addHabit = (newHabit) => {
    setHabit([...habit, newHabit]);
  };

  const deleteHabit = (id) => {
    setHabit(habit.filter((habit) => habit.id !== id));
  };

  const saveCard = (id, name, description) => {
    const updatedHabit = habit.map((h) =>
      h.id === id ? { ...h, name: name, description: description } : h
    );
    setHabit(updatedHabit);
    setViewedHabit(null);
  };

  const toggleComplete = (id) => {
    setHabit(
      habit.map((habit) =>
        habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
      )
    );
  };

  // console.log(viewHabit);

  return (
    <>
      <Header />
      <div className="flex gap-2">
        <NewHabit addHabit={addHabit} />
        <HabitList
          viewHabit={viewHabit}
          toggleComplete={toggleComplete}
          habits={habit}
          deleteHabit={deleteHabit}
        />
        <CompletedHabitList
          viewHabit={viewHabit}
          toggleComplete={toggleComplete}
          habits={habit}
          deleteHabit={deleteHabit}
        />
      </div>
      <div className="flex justify-center border items-center min-h-[70vh]">
        {viewedHabit && (
          <HabitCard
            id={viewedHabit.id}
            saveCard={saveCard}
            HabitName={viewedHabit.name}
            Description={viewedHabit.description}
          />
        )}
      </div>
    </>
  );
}

export default App;
