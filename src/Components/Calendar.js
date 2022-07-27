import React, { useState } from "react";
import "./Calendar.css";

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var date = new Date();

const Calendar = () => {
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(2022);
  const [selectedDate, setSelectedDate] = useState(null);

  const firstDay = new Date(year, month, 1).getDay();

  const incrementMonth = () => {
    setMonth((oldMonth) => {
      if (oldMonth === 11) {
        setYear((oldYear) => oldYear + 1);
        return 0;
      } else {
      }
      return oldMonth + 1;
    });
  };
  const decrementMonth = () => {
    setMonth((oldMonth) => {
      if (oldMonth === 0) {
        setYear((oldYear) => oldYear - 1);
        return 11;
      } else {
      }
      return oldMonth - 1;
    });
  };

  return (
    <div className="Calendar">
      <div className="controls">
        <button onClick={decrementMonth}>{"<"}</button>
        {MONTHS[month] + " " + year}
        <button onClick={incrementMonth}>{">"}</button>
      </div>
      <div className="grid">
        {DAYS.map((day) => (
          <div className="day fade">{day.slice(0, 2)}</div>
        ))}

        {Array(firstDay)
          .fill()
          .map((_, i) => {
            return (
              <div className="day fade">
                {getDaysInMonth(month - 1, year) + i - firstDay}
              </div>
            );
          })}
        {Array(getDaysInMonth(year, month))
          .fill()
          .map((_, i) => {
            return (
              <div
                onClick={() => {
                  setSelectedDate(new Date(year, month, i + 1));
                }}
                className={
                  "day " +
                  (date.getDate() === i + 1 ? "today " : "") +
                  ((selectedDate?.getDate() === i + 1) ? "selected" : "")
                }
              >
                {i + 1}
              </div>
            );
          })}
        {Array(42 - (firstDay + getDaysInMonth(year, month)))
          .fill()
          .map((_, i) => {
            return <div className="day fade">{i + 1}</div>;
          })}
      </div>
    </div>
  );
};

export default Calendar;
