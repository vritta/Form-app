import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const [firstName,setFirstName] = useState("");
  // const [lastName,setLastName] = useState("");

  
  // function changeFirstNameHandler(event){
  //   // console.log("first name - "+event.target.value);
  //   setFirstName(event.target.value);
  // }
  // console.log(firstName);
  // function changeLastNameHandler(event){
  //   // console.log("last name - " + event.target.value);
  //   setLastName(event.target.value);
  //   console.log(lastName);
  // }

  const [formData, setFormData] = useState({firstName:"", lastName:""});

  function changeHandler(event){
    setFormData((prev)=>( {...prev,[event.target.name]: event.target.value} ));
  }
  console.log(formData.firstName, formData.lastName);
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder='first name' 
          onChange={changeHandler} name='firstName'
        />
        <br /><br />
        <input type="text" placeholder='last name' 
          onChange={changeHandler} name='lastName'
        />
      </form>
    </div>
  );
}

export default App;
