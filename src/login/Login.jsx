import React, { useEffect } from "react";
import { testApinew } from "../apis/Api";

const Login = () => {
  useEffect(() => {
    console.log("Hello login!!");
    //calling test API
    testApinew().then((res) => {
      console.log(res);
    });
  });
  return (
    <div className="container">
      <h1>Login to your Account!</h1>
      <form className="w-50">
        <label>Enter your Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter you email"
        ></input>

        <label className="mt-2">Enter your Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter you password"
        ></input>
        <button className="btn btn-danger w-100 mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
