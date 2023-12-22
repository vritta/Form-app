import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");

  
  function changeFirstNameHandler(event){
    // console.log("first name - "+event.target.value);
    setFirstName(event.target.value);
  }
  console.log(firstName);
  function changeLastNameHandler(event){
    // console.log("last name - " + event.target.value);
    setLastName(event.target.value);
    console.log(lastName);
  }
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder='first name' 
          onChange={changeFirstNameHandler}
        />
        <br /><br />
        <input type="text" placeholder='last name' 
          onChange={changeLastNameHandler}
        />
      </form>
    </div>
  );
}

export default App;
