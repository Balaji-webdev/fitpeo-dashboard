import { useEffect, useState } from "react";
import HealthStatus from "./healthStatus";
import { FaHeart, FaLungs } from "react-icons/fa";
import { LiaBoneSolid } from "react-icons/lia";

export default function StatusDashboard() {
  const [data, setData] = useState([]);
  // Useeffect for the mock data
  useEffect(() => {
    const mockData = [
      [
        {
          id: 1,
          title: "Heart",
          date: "14/5/2025",
          status: "Healthy",
          icon: <FaHeart className="icon-1" />,
        },
        {
          id: 2,
          title: "Lungs",
          date: "14/5/2025",
          status: "Clear",
          icon: <FaLungs className="icon-2" />,
        },
        {
          id: 3,
          title: "Bones",
          date: "14/5/2025",
          status: "Strong ",
          icon: <LiaBoneSolid className="icon-3" />,
        },
      ],
    ];
    //we setting the data in array and set the index 0 for mapping
    setData(mockData[0]);
  }, []);

  return (
    <>
      <div className="status-card">
        {/* mapping the mock data for the healthstatus card  */}
        {data &&
          data.map((datas) => (
            <HealthStatus
              key={datas.id}
              icon={datas.icon}
              title={datas.title}
              date={datas.date}
              status={datas.status}
            />
          ))}
      </div>
    </>
  );
}
