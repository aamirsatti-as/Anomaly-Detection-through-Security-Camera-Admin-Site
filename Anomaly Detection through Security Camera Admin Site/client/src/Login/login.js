import React from "react";
import './login.css'
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  useEffect(() => {
    const auth = localStorage.getItem("admin");
    if (auth) {
      navigate("/dashboard");
    }
  });

  const handleSubmit = async () => {

    console.log({ email, password });
    console.log("sadf")
    let result = await fetch("http://localhost:4000/adminlogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result.email) {
      localStorage.setItem("admin", JSON.stringify(result));
       navigate("/dashboard");

    } else {
      alert("please enter correct details");
    }
  }
  return (
    <div className="background mx-1 mt-1">
      <img className="bkimage" src="../images/image.jpg"></img>
      <div className="center">
        <h1>ADTSC</h1>
        <form>
          <div className="txt_field">
            <input type="text" required
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span></span>
            <label>Password</label>
          </div>
          <input className="pass" type="submit" value="Login"
            onClick={handleSubmit}
          />
        </form>
      </div>

    </div>


  )
}
export default Login;