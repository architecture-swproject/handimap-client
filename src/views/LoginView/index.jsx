import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import "./Auth.css";
import { SignIn } from "../../store/modules/auth/actions/authAction";
import Logo from "../../components/Logo";
import SizedBox from "../../components/SizedBox";

const Login = () => {
  const currentState = useSelector((state) => state.Auth);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const userLogin = (credentials) => dispatch(SignIn(credentials));

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const submitUser = (e) => {
    e.preventDefault();
    userLogin({
      username: user.username,
      password: user.password,
    });
  };

  if (currentState.isAuthenticated) {
    return <Redirect to="/carrier" />;
  }

  return (
    <div className="main">
      <div className="login-content">
        <Logo />
        <SizedBox height="30px" />
        <div style={{fontSize:"25px", fontWeight:"bold", color:"white"}}>Login</div>
        <SizedBox height="20px" />
        <div>
          <form onSubmit={submitUser} className="card">
            <div className="mb-2">
              {currentState.loginError &&
              currentState.loginError.Incorrect_details ? (
                <small className="color-red">
                  {currentState.loginError.Incorrect_details}
                </small>
              ) : (
                ""
              )}
              {currentState.loginError && currentState.loginError.No_record ? (
                <small className="color-red">
                  {currentState.loginError.No_record}
                </small>
              ) : (
                ""
              )}
            </div>
            <form>
              <label>username</label>
              <input
                type="username"
                name="username"
                placeholder="Enter username"
                onChange={handleChange}
              />
              {currentState.loginError &&
              currentState.loginError.Required_email ? (
                <small className="color-red">
                  {currentState.loginError.Required_email}
                </small>
              ) : (
                ""
              )}
              {currentState.loginError &&
              currentState.loginError.Invalid_email ? (
                <small className="color-red">
                  {currentState.loginError.Invalid_email}
                </small>
              ) : (
                ""
              )}
            </form>
            <form>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
              {currentState.loginError &&
              currentState.loginError.Required_password ? (
                <small className="color-red">
                  {currentState.loginError.Required_password}
                </small>
              ) : (
                ""
              )}
              {currentState.loginError &&
              currentState.loginError.Invalid_password ? (
                <small className="color-red">
                  {currentState.loginError.Invalid_password}
                </small>
              ) : (
                ""
              )}
              {currentState.loginError &&
              currentState.loginError.Incorrect_password ? (
                <small className="color-red">
                  {currentState.loginError.Incorrect_password}
                </small>
              ) : (
                ""
              )}
            </form>

            {currentState.isLoading ? (
              <button color="primary" type="submit" block disabled>
                Login...
              </button>
            ) : (
              <button
                color="primary"
                type="submit"
                block
                disabled={user.username === "" || user.password === ""}
              >
                Login
              </button>
            )}
          </form>
          <div
            className="mt-2"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <small>
                <Link to="/signup">Sign Up</Link>
              </small>
            </div>
            <div>
              <small>
                <Link to="/forgotpassword">Forgot Password?</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
