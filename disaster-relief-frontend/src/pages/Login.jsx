import { useState } from "react";
import { FaUser, FaLock, FaUsers } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {

  const response = await fetch(
    "http://localhost:5000/login",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        username: username,
        password: password
      })
    }
  );

  const data = await response.json();

  console.log(data);
};
  return (
    <div style={styles.container}>

      <h1 style={styles.title}>
        DRROS
      </h1>

      <div style={styles.card}>

        {/* Username */}
        <div style={styles.inputBox}>
          <FaUser style={styles.icon}/>
          <input placeholder="Username" style={styles.input} value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        {/* Password */}
        <div style={styles.inputBox}>
          <FaLock style={styles.icon}/>
          <input type="password" placeholder="Password" style={styles.input} value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

    

        <button style={styles.button} onClick={handleLogin}>
        Login
        </button>

      </div>
    </div>
  );
}

const styles = {

  

  container: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    color: "#1e40af",
    marginBottom: "30px"
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    width: "350px",
    boxShadow: "0px 8px 25px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },

  inputBox: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px"
  },

  icon: {
    color: "#2563eb",
    marginRight: "10px"
  },

  input: {
    border: "none",
    outline: "none",
    flex: 1,
    background: "transparent",color: "#000",        // important
  fontSize: "14px"
  },

  button: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Login;