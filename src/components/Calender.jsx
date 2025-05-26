import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

import "../style/calender.css";

export default function Calendar() {
  // Mock data for the calender for days,dates,schedule
  const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const schedule = [
    { day: "Mon", time: "09:00", color: " #2f217e" },
    { day: "Tues", time: "14:00", color: " #2f217e" },
    { day: "Wed", time: "11:00", color: "#1ebcff" },
    { day: "Thurs", time: "14:00", color: "#1ebcff" },
    { day: "Fri", time: "09:00", color: "#1ebcff" },
  ];

  return (
    <>
      <div className="calender-content">
        <h2>May 2025</h2>
        {/* icons for the move the calender but it  is static  */}
        <p>
          <RiArrowLeftFill className="calender-icon" />
          <RiArrowRightFill className="calender-icon" />
        </p>
      </div>

      <div className="calendar-grid">
        {/* for mapping the content that should display from the mock data */}
        {days.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className="calendar-day-name">{day}</div>
            <div className="calendar-date">{dates[index]}</div>
            <div className="time-slots">
              {/* mapping through each time slot and check if there's 
      a scheduled event for the current day and time */}
              {["09:00", "11:00", "14:00"].map((time) => {
                // Find if there's an event scheduled for this specific day and time
                const event = schedule.find(
                  (s) => s.day === day && s.time === time
                );
                return (
                  <div
                  // here we display the find time a style it by inline styling
                    key={time}
                    className={`time-slot ${event ? "highlight" : ""}`}
                    style={{
                      backgroundColor: event ? event.color : "transparent",
                      color: event ? "#e3d4fc" : "#505558",
                    }}
                  >
                    <div className="calender-time">{time}</div>
                    {event && (
                      <span className="event-label">{event.dates}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
