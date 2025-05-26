import { GiLoveInjection } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { GiLeg } from "react-icons/gi";
import { FaTooth } from "react-icons/fa";
import "../style/appointment.css";
export default function Appointment() {
// mock data two days appointment
  const saturdayAppointment = [
    {
      title: "Health Checkup",
      icon: <GiLoveInjection />,
      time: "11:00:13:00",
      doctor: "Dr.Elon Musk",
    },
    {
      title: "Ophthalmologist",
      icon: <FaRegEye />,
      time: "15:00-16:00",
      doctor: "Dr.Tesla",
    },
  ];

  const thursdayAppointment = [
    {
      firstname: "Dentist",
      icon: <FaTooth />,
      time: "09:00-11:00",
      doctor: "Dr.James Cameron",
    },
    {
      firstname: "Physiotherapy",
      icon: <GiLeg />,
      time: "11:00-12:00",
      doctor: "Dr.Steve Jobs",
    },
  ];

  return (
    <div className="appointments">
      <div className="appointments-header">
        <h2>The Upcoming Schedule</h2>
      </div>
{/* mapping the thursdayAppointment for on thursday */}
      <div className="appointment-section">
        <p className="day-label">On Thursday</p>
        <div className="appointment">
          {thursdayAppointment.map((app, index) => (
            <div key={index} className="appointment-item">
              <div className="appointment-icon">{app.icon}</div>
              <div className="appointment-details">
                <div className="name">{app.firstname}</div>
                <div className="time">{app.time}</div>
                <div className="doctor">{app.doctor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
{/* mapping the saturdayAppointment for on Saturday */}
      <div className="appointment-section">
        <p className="day-label">On Saturday</p>
        <div className="appointment">
          {saturdayAppointment.map((data, index) => (
            <div key={index} className="appointment-item">
              <div className="appointment-icon">{data.icon}</div>
              <div className="appointment-details">
                <div className="name">{data.title}</div>
                <div className="time">{data.time}</div>
                <div className="doctor">{data.doctor}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
