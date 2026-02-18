import { Link } from "react-router-dom";

function MainLayout({ children }) {

  const sidebarStyle = {
    width: "220px",
    background: "#0f172a",
    color: "white",
    padding: "20px",
    fontFamily: "Arial",
    height: "100vh"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block",
    padding: "10px 0",
    marginBottom: "10px",
    borderRadius: "6px"
  };

  const mainContentStyle = {
    flex: 1,
    padding: "20px",
    background: "#111827",
    color: "white"
  };

  return (
    <div style={{ display: "flex", width: "100vw" }}>

      {/* ===== SIDEBAR ===== */}
      <div style={sidebarStyle}>

        <h2 style={{ marginBottom: "30px" }}>DRROS</h2>

        <nav>
          <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
          <Link to="/victims" style={linkStyle}>Manage Victims</Link>
          <Link to="/reports" style={linkStyle}>Reports</Link>
        </nav>

      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div style={mainContentStyle}>
        {children}
      </div>

    </div>
  );
}

export default MainLayout;