import React, { useState, useRef } from "react";

import "./Login.css";

const Login = (props) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const nameInputRef = useRef(null);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;

    let url;
    if (isLoginForm) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzV6Mv44I17lBbPwZZzfvaW096YeND6ZA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzV6Mv44I17lBbPwZZzfvaW096YeND6ZA";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const token = data.idToken;
        console.log(token);

        localStorage.setItem("token", token);
        localStorage.setItem("username", enteredName);
        localStorage.setItem("userEmail", enteredEmail);

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";

        props.onLogin();
      })
      .catch((err) => {
        alert(err.message);
        console.error(err.message);
      });
  };

  return (
    <div className="main-div">
      <form>
        <div className="form-container">
          <p>{isLoginForm ? "Login" : "Signup"}</p>

          <label>
            Email address
            <input
              type="email"
              ref={emailInputRef}
              placeholder="Enter email"
              required
            />
          </label>

          <label>
            Enter Password
            <input
              type="password"
              ref={passwordInputRef}
              placeholder="Password"
              required
            />
          </label>

          {!isLoginForm && (
            <label>
              Enter Your Name
              <input
                type="text"
                ref={nameInputRef}
                placeholder="Enter Your Name"
                required
              />
            </label>
          )}

          <div>
            <button type="submit" onClick={submitHandler}>
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>

          <p onClick={toggleForm}>
            {isLoginForm
              ? "Don't have an account! Signup"
              : "Already have an account! Signin"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
