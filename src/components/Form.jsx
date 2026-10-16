import React from 'react'

const Form = (props) => {
  return (
         <form className="form">
       <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
       <input type="password" placeholder="Password"/>

        <button type="submit">
          {props. isRegisterd ? "Login": "Register" }
        </button>
      </form>
  )
}

export default Form;
