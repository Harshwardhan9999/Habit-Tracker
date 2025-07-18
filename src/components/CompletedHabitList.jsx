import React from "react";
import Habit from "./Habit";

const CompletedHabitList = ({
  habits,
  toggleComplete,
  deleteHabit,
  viewHabit,
}) => {
  return (
    <ul className="mt-3 w-[360px] h-[80vh] overflow-auto">
      {habits.length > 0 && (
        <h1 className="text-xl font-normal mt-1 mb-4">Completed Habits</h1>
      )}
      {habits
        .filter((h) => h.isCompleted)
        .map((habit) => (
          <Habit
            habit={habit}
            key={habit.id}
            viewHabit={viewHabit}
            toggleComplete={toggleComplete}
            deleteHabit={deleteHabit}
          />
        ))}
    </ul>
  );
};

export default CompletedHabitList;
