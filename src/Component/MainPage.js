import React, { useState, useEffect } from "react";
import './MainPage.css';

const MainPage = ({onSignOut}) => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const signOutHandler= ()=>{
    localStorage.removeItem("token");
    // localStorage.removeItem("username");
    localStorage.removeItem("userEmail");

    onSignOut();
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedUserEmail = localStorage.getItem("userEmail");

    if (storedUsername && storedUserEmail) {
      setUsername(storedUsername);
      setUserEmail(storedUserEmail);
    }
  }, []);

  return (
    <div className="main-div">
        <h1>Welcome to FormulaQ Solution's Task</h1>
      <div className="profile-container">
        <p>Hello {username}</p>
        <p>You are signed in with email {userEmail}</p>
      </div>
        <button className="logout-button" onClick={signOutHandler}>SignOut</button>
    </div>
  );
};

export default MainPage;
