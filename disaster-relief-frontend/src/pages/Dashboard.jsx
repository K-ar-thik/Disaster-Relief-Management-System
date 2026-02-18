function Dashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>
        Disaster Relief Dashboard
      </h1>

      {/* Dashboard Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>

        <div style={cardStyle}>
          <h3>Total Victims</h3>
          <p>120</p>
        </div>

        <div style={cardStyle}>
          <h3>Active Camps</h3>
          <p>8</p>
        </div>

        <div style={cardStyle}>
          <h3>Available Volunteers</h3>
          <p>45</p>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  background: "red",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)"
};

export default Dashboard;