import React, { useEffect } from "react";
import { testApinew } from "../apis/Api";
import { useState } from "react";

const Login = () => {
  // useEffect(() => {
  //   console.log("Hello login!!");
  //   //calling test API
  //   testApinew().then((res) => {
  //     console.log(res);
  //   });
  // });

  //use state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //error state
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Validation
  var validation = () => {
    let isValid = true;

    if (email === "" || email.includes("@" === false)) {
      setEmailError("Email is empty or forgot to put @");
      isValid = false;
    }
    if (password === "") {
      setPasswordError("Password is Empty");
      isValid = false;
    }

    return isValid;
  };

  //login function
  const handleLogin = (e) => {
    e.preventDefault();

    //validation
    if (!validation()) {
      return;
    }

    console.log(email, password);
  };

  return (
    <div className="container">
      <h1>Login to your Account!</h1>
      <form className="w-50">
        <label>Enter your Email:{email}</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter you email"
        ></input>
        {emailError && <p className="text-danger">{emailError}</p>}

        <label className="mt-2">Enter your Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter you password"
        ></input>
        {passwordError && <p className="text-danger">{passwordError}</p>}
        <button onClick={handleLogin} className="btn btn-danger w-100 mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
