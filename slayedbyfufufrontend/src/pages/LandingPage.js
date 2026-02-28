import { useState } from "react";

function LandingPage({ setPage }) {
  return (
    <div style={styles.container}>
      <h1>Welcome to SlayedByFufu 💇🏽‍♀️</h1>
      <p>Book your beauty appointments easily.</p>

      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setPage("login")}>
          Login
        </button>

        <button style={styles.button} onClick={() => setPage("register")}>
          Register
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  buttonContainer: {
    marginTop: "30px",
  },
  button: {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default LandingPage;