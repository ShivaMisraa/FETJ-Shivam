import React, { useState } from "react";
import Login from "./Authentication/Login";
import MainPage from "./Component/MainPage";
import Pattern from "./Component/Pattern";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const signOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <MainPage onSignOut={signOutHandler} />
        
      ) : (
        <Login onLogin={loginHandler} />
      )}
    </div>
  );
}

export default App;
