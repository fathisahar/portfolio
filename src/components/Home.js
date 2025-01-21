import React from "react";
import { PiX } from "react-icons/pi";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.window}>
        <div style={styles.titleBar}>
          <span style={styles.titleText}>SAHAR.EXE</span>
        </div>
        <div style={styles.content}></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  window: {
    width: "400px",
    height: "300px",
    backgroundColor: "#c0c0c0",
    border: "2px solid #000",
    boxShadow: "4px 4px 0 #000", 
  },
  titleBar: {
    height: "25px",
    background: "linear-gradient(to right, #004cff, #8bbfff)",
    color: "#ffffff", 
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  titleText: {
    fontFamily: "sans-serif", 
  },
  content: {
    height: "calc(100% - 25px)", 
    backgroundColor: "#c0c0c0", 
  },
};

export default Home;
