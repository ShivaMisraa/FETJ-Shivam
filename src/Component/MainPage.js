import React, { useState, useEffect } from "react";
import './MainPage.css';

const MainPage = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const signOutHandler= ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userEmail");
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
        <button onClick={signOutHandler}>SignOut</button>
      <div className="profile-container">
        <p>Hello {username}</p>
        <p>You are signed in with email {userEmail}</p>
      </div>
    </div>
  );
};

export default MainPage;
