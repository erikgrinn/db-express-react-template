import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import styles from "../styles/App.module.css";

function SignUpPage() {
  // const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   useEffect(() => {}, []);

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload (optional?)

    // Send data to backend
    await fetch("http://localhost:8080/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    setUsername(""); // Clear input after submit
    setPassword("");
  }
  return (
    // use below for integration with React, using express.json()
    // make sure to match up with Express req.body
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="username"
        />
        <input
          name="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </>

    // use below for direct express.urlencoded(extended: false|true)
    // <>
    //   <h1>Sign Up</h1>
    //   <form action="http://localhost:8080/sign-up" method="POST">
    //     <label for="username">Username</label>
    //     <input id="username" name="username" placeholder="username" type="text" />
    //     <label for="password">Password</label>
    //     <input id="password" name="password" type="password" />
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </>
  );
}

export default SignUpPage;
