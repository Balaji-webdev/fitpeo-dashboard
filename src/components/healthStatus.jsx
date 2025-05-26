import "../style/healthStatus.css";

export default function HealthStatus({ icon, title, status, date }) {
  return (
    <>
    {/* layout for the HealthStatus */}
      <div className="status">
        <div className="icons-wrapper">{icon}</div>
        <div className="content">
          <h2>{title}</h2>
          <p>{date}</p>
          <p>{status}</p>
        </div>
      </div>
    </>
  );
}
