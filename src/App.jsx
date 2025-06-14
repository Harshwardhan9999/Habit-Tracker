import "./App.css";
import HabitCard from "./components/HabitCard";
import HabitList from "./components/HabitList";
import Header from "./components/Header";
import NewHabit from "./components/NewHabit";
import { useEffect, useState } from "react";
import CompletedHabitList from "./components/CompletedHabitList";
// import { motion } from "framer-motion";

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
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

    setHabit(
      habit.map((h) => {
        if (h.id !== id) return h;

        const hasCompletedToday = h.completedDates?.includes(today);

        const updatedDates = hasCompletedToday
          ? h.completedDates.filter((date) => date !== today)
          : [...(h.completedDates || []), today];

        return {
          ...h,
          completedDates: updatedDates,
          isCompleted: !hasCompletedToday,
        };
      })
    );
  };

  // console.log(viewHabit);

  return (
    <div className="bg-[#f7f7f]">
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
      {viewedHabit && (
        <div className="fixed inset-0 flex justify-around items-center z-50 backdrop-blur-sm  bg-[rgba(0,0,0,0.2)]">
          
          <HabitCard
            id={viewedHabit.id}
            saveCard={saveCard}
            HabitName={viewedHabit.name}
            Description={viewedHabit.description}
            onCancel={() => setViewedHabit(null)}
          />
          {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
        >
          <HabitCard
            id={viewedHabit.id}
            saveCard={saveCard}
            HabitName={viewedHabit.name}
            Description={viewedHabit.description}
            onCancel={() => setViewedHabit(null)}/>
        </motion.div> */}
        </div>
      )}
    </div>
  );
}

export default App;
