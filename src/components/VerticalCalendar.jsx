import React from 'react'
import CalendarDay from './CalendarDay';



const VerticalCalendar = () => {
  const today = new Date();
  const getLastNDates = (n) => {
    const dates = [];
    for (let i = 0; i < n; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      dates.push(date);
    }
    return dates;
  }
    const last7Days = getLastNDates(7);
  return (
    <div className='sticky bg-white top-0 shadow-md p-2 rounded-xl'>
      <div className="flex flex-col gap-2">
        {
          last7Days.map(day => (
            <CalendarDay date={day} percentage={Math.floor(Math.random() * 100)}
            isToday={day.toDateString() === today.toDateString()}
            />
          ))
        }
      </div>
    </div>
  );
}

export default VerticalCalendar

{/* <div className="flex flex-col gap-2">
  <CalendarDay date="" percentage={""} isToday={""} />
</div> */}