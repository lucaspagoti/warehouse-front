import React, { useState,  } from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUset] = useState({ name: "", email: "" });
  const [advice, setAdvice] = useState("");

  const login = (details) => {
    console.log(details);
  };

  const logout = () => {
    console.log(logout);
  };

  

  return (
    <>
      {" "}
      
      <div className="App">
        {user.email != "" ? (
          <div class="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button>Logout</button>
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
    </>
  );
}

export default App;

// https://www.youtube.com/watch?v=91qEdc6dSUs 8:27
