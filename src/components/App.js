
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const [name,setName] = useState("");
  function formHandle(event){
    setName(event.target.value );

  }
  return (
    <div>
        <form >
          <label htmlFor="name">Enter your name:</label><br/>
          <input onChange={formHandle} name="name" value={name}></input>
        </form>
        {!name && <p></p>}
        {name &&<p>Hello {name}!</p>}
    </div>
  )
}

export default App
