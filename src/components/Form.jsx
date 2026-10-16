import React from 'react'

const Form = (props) => {
  return (
         <form className="form">
       <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      {

        props.isRegisterd === false ? 
                 <input type="Confirm password" placeholder="Confirm Password"/>
                 :null
        
      }

        <button type="submit">
          {props. isRegisterd ? "Login": "Register" }
        </button>
      </form>
  )
}

export default Form;
