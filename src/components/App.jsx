import React from "react";
import Login from "./Login"
import Register from "./Register";


const userIsRegisterd =true;



function App() {
  return (
    <div className="container">
   {userIsRegisterd=== true? <Login/>: <Register/>}
