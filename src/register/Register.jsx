import React, { useState } from "react";

const Register = () => {
  // Conding Section

  //Make a state variables - 5 state
  // Format (variableName, Changing VarName) = State

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    // <div>
    //   <h1>Its Register</h1>
    // </div>
    <>
      <div className="m-3">
        <h1>Create an account</h1>

        <form className="w-50">
          <label>Firstname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your fistname"
          />

          <label className="mt-2">Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
          />
          <label className="mt-2">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your Email Address"
          />
          <label className="mt-2">Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />
          <label className="mt-2">Confirm Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />
          <button className="btn btn-dark mt-2 w-100">Create Account</button>
        </form>
      </div>
    </>
  );
};

export default Register;

//Make UI complete
// Make a Variable to save value if each input temporarily
// Change everytime we write something
// submit
