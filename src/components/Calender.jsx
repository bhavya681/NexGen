import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-gray-800 text-black p-6 shadow-md max-w-md mx-auto mt-10 rounded-3xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Calendar</h2>
      <div className="text-center rounded-xl">
        <Calendar onChange={setDate} value={date} className={"rounded-xl"}/>
      </div>
    </div>
  );
};

export default Calender;
