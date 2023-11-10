import React, { useState, useEffect } from "react";
import './MainPage.css';
import Pattern from "./Pattern";

const MainPage = ({onSignOut}) => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState("");

  const signOutHandler= ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");

    onSignOut();
  }

  const getCurrentDateTime = () => {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    setCurrentDateTime(formattedDateTime);
  }


  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedUserEmail = localStorage.getItem("userEmail");

    if (storedUsername && storedUserEmail) {
      setUsername(storedUsername);
      setUserEmail(storedUserEmail);
    }
    getCurrentDateTime();
  }, []);

  return (
    <div className="main-div">
      <span>Welcome on Board at {currentDateTime}</span>
        <h1>Welcome to FormulaQ Solution's Task</h1>
      <div className="profile-container">
        <p>Hello {username}</p>
        <p>You are signed in with email {userEmail}</p>
      </div>
        <button className="logout-button" onClick={signOutHandler}>SignOut</button>
        <Pattern/>
    </div>
  );
};

export default MainPage;
