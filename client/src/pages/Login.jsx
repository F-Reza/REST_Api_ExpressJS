import React from 'react';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",

      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      alert("Login Successful");
      storetokenInLS(data.token);
      // localStorage.setItem("token", data.token);
      
      setUser({
        email: "",
        password: "",
      });
      // Navigate to home page
      navigate("/");

      } else {
        const errorData = await response.json();
        alert(errorData.message || "Login Failed");
      }

    } catch (error) {
      console.log("Error:", error);
      alert("Network error or server unavailable");
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-login">
            <div className="container grid grid-two-cols">
              <div className="login-image login-img">
                <img
                  src="src\assets\img\login.png"
                  alt="let's login to your account"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main login code  */}
              <div className="login-form">
                <h1 className="main-heading mb-3">login form</h1>
                <br />
                <form onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;