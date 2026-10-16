import React from 'react'

const Register = () => {
  return (
    <div>
        <form className="form">
       <Input type="text" placeholder="Username"/>
      <Input type="password" placeholder="Password"/>
      <Input type="Confirm Password" placeholder="Password"/>

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Registe