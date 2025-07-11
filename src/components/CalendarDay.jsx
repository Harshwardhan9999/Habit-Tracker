import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CalendarDay = ({date, percentage, isToday}) => {
  const dayName = date.toLocaleString("Default", {weekday: "short"});
  const day = date.getDate();
  return (
    <div className={`flex flex-col items-center justify-center w-16 h-auto rounded-xl p-3 text-center hover:bg-[#F5F5F5] ml-1 ${isToday ? "bg-blue-100" : ""}`}>
      <p className="font-light">{dayName}</p>
      <p className="font-bold text-[#393D3F] text-[14px]">{day}</p>
      <div className="w-6 h-6 mb-1">
        <CircularProgressbar
          value={percentage}
          pathTransitionDuration={2.5}
          styles={buildStyles({
            pathColor: `rgba(0,127,255, ${percentage / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
          strokeWidth={12}
        />
      </div>
    </div>
  );
};

export default CalendarDay;
