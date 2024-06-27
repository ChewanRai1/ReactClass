import React, { useState } from "react";
import { forgotPassword, verifyOtp } from "../../apis/Api";
import { toast } from "react-toastify";
// import { isEditable } from "@testing-library/user-event/dist/utils";

const ForgotPassword = () => {
  //phone number state
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);

  //definng 2 state
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");

  //send otp fucntion
  const handleForgotPassword = (e) => {
    e.preventDefault();

    //calling api
    forgotPassword({ phone })
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
          setIsSent(true);
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      });
  };

  //verify and set password function
  const handleVerify = (e) => {
    e.preventDefault();

    //make a json object
    const data = {
      phone: phone,
      otp: otp,
      password: password,
    };

    //api call
    verifyOtp(data)
      .then((res) => {
        if (res.status === 200) {
          toast.success(res.data.message);
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="contanier mt-2">
        <h3>Forgot Password</h3>

        <form className="w-25">
          <span className="d-flex">
            <h4>+977</h4>
            <input
              disabled={isSent}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              type="number"
              placeholder="Enter your valid number"
            />
          </span>
          <button
            disabled={isSent}
            onClick={handleForgotPassword}
            className="btn btn-dark w-100 mt-2"
          >
            Send OTP
          </button>
          {isSent && (
            <>
              <hr />
              <span>OTP has been sent to {phone}✔️</span>
              <input
                onChange={(e) => setOtp(e.target.value)}
                type="number"
                className="form-control mt-2"
                placeholder="Enter valid OTP"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="form-control mt-2"
                placeholder="Set new password"
              />
              <button
                onClick={handleVerify}
                className="btn btn-primary mt-2 w-100"
              >
                Verify OTP and Set Password
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;

//Logic in this page
//UI - phone number input field - State
// Make a API Request (Sending OTP)
// if OTP is send successfully:
//     Button & Input (Disable).
//     show OTP input field and the new password Field
//     'OTP is sent to '1234567890'

// If OTP is valid: set password
// else: invalid otp
