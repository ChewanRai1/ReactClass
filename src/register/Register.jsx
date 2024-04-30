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

  // Make a function to save the state
  const handleFirstname = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastname = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  //For button
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    // <div>
    //   <h1>Its Register</h1>
    // </div>
    <>
      <div className="m-3">
        <h1>Create an account</h1>

        <form className="w-50">
          <label>Firstname:{firstName}</label>
          <input
            onChange={handleFirstname}
            type="text"
            className="form-control"
            placeholder="Enter your fistname"
          />

          <label className="mt-2">Lastname:{lastName}</label>
          <input
            onChange={handleLastname}
            type="text"
            className="form-control"
            placeholder="Enter your lastname"
          />
          <label className="mt-2">Email Address: {email}</label>
          <input
            onChange={handleEmail}
            type="email"
            className="form-control"
            placeholder="Enter your Email Address"
          />
          <label className="mt-2">Password:{password}</label>
          <input
            onChange={handlePassword}
            type="text"
            className="form-control"
            placeholder="Enter your password"
          />
          <label className="mt-2">Confirm Password: {confirmPassword}</label>
          <input
            onChange={handleConfirmPassword}
            type="text"
            className="form-control"
            placeholder="Enter your confirm password"
          />
          <button onClick={handleSubmit} className="btn btn-dark mt-2 w-100">
            Create Account
          </button>
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
