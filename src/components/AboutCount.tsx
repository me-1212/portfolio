import "../css/About.css";

interface AboutCount {
  value: string;
  label: string;
}

function AboutCount({ value, label }: AboutCount) {
  return (
    <>
      <div className="stat-item">
        <span className="stat-value">{value}</span>
        <span className="stat-label">{label}</span>
      </div>
    </>
  );
}

export default AboutCount;
