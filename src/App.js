import React, { useState } from "react";
import Login from "./Authentication/Login";
import MainPage from "./Component/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const signOutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? <MainPage onSignOut={signOutHandler} /> : <Login onLogin={loginHandler} />}
    </div>
  );
}

export default App;
