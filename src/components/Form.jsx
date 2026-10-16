import React from 'react'
import Input from "./Input"

const Login = () => {
  return (
    <div>
         <form className="form">
       <Input type="text" placeholder="Username"/>
      <Input type="password" placeholder="Password"/>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Login
