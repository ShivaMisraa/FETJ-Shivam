import React, { useState } from "react";
import Login from "./Authentication/Login";
import MainPage from "./Component/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <MainPage /> : <Login onLogin={loginHandler} />}
    </div>
  );
}

export default App;
