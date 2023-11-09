import React, { useState, useEffect } from "react";

const MainPage = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    
    const storedUsername = localStorage.getItem("username");
    const storedUserEmail = localStorage.getItem("userEmail");

    if (storedUsername && storedUserEmail) {
      setUsername(storedUsername);
      setUserEmail(storedUserEmail);
    }
  }, []);

  return (
    <div>
      <p>Hello {username}</p>
      <p>You are signed in with email {userEmail}</p>
    </div>
  );
};

export default MainPage;
