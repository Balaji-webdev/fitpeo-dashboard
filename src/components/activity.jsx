import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "../style/activity.css";
// Sample data for weekly step counts
const data = [
  { day: "Mon", steps: 7500 },
  { day: "Tue", steps: 8200 },
  { day: "Wed", steps: 6900 },
  { day: "Thu", steps: 7300 },
  { day: "Fri", steps: 5400 },
  { day: "Sat", steps: 9100 },
  { day: "Sun", steps: 6600 },
];

export default function Activity() {
  return (
    <div className="chart-container">
      {/* Header section showing title and period */}
      <div className="chart-header">
        <h3>Weekly Activity</h3>
        <p>Last 7 days</p>
      </div>
      <ResponsiveContainer width="100%" height={120}>
        {/* Main bar chart component */}
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* X-axis  for days */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            fontSize={12}
          />
          {/* Y-axis for step counts */}
          <YAxis axisLine={false} tickLine={false} fontSize={10} />
          <Tooltip />
          <Bar
            dataKey="steps"
            fill="#1ebcff"
            radius={[5, 5, 0, 0]} //for rounded corners on top
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
