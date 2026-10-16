import React from "react";
import Form from "./Form";


const userIsRegisterd =true;



function App() {
  return (
    <div className="container">
   <Form
   isRegisterd = {userIsRegisterd}
   />
    </div>
  );
}

export default App;
