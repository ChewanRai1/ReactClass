import React from "react";

const Register = () => {
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
