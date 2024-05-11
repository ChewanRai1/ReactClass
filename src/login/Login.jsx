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
    <div>
      <h1>Its Login</h1>
    </div>
  );
};

export default Login;
