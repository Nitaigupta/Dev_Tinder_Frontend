import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./utils/constant";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // toggle state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("ronit@gmail.com");
  const [password, setPassword] = useState("Ronit@1234");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle login
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/feed");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err);
    }
  };

  // Handle signup
  const handleSignup = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center my-10">
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center ">
            {isSignup ? "Signup" : "Login"}
          </h2>

          <div>
            <fieldset className="fieldset">
              {isSignup && (
                <>
                  <legend className="fieldset-legend">First Name</legend>
                  <input
                    type="text"
                    className="input"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />

                  <legend className="fieldset-legend">Last Name</legend>
                  <input
                    type="text"
                    className="input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </>
              )}

              <legend className="fieldset-legend">Email Id</legend>
              <input
                type="text"
                className="input"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />

              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>
          </div>

          {/* error message */}
          <div className="text-red-500 text-center">
            <p>{error}</p>
          </div>

          {/* buttons */}
          <div className="card-actions justify-center">
            {isSignup ? (
              <button className="btn btn-primary my-5" onClick={handleSignup}>
                Signup
              </button>
            ) : (
              <button className="btn btn-primary my-5" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>

          {/* toggle */}
          <p
            className="text-blue-400 text-center cursor-pointer"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don't have an account? Signup"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
