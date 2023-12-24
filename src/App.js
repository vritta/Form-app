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

  const [formData, setFormData] = useState({firstName:"", lastName:"", isVisible:true});

  function changeHandler(event){  
    const {name,type,value,checked} = event.target;
    setFormData((prev)=>{return {...prev,[name]: type==="checkbox"?checked:value} });
    console.log(event.target);
  }
  console.log(formData);
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder='first name' 
          onChange={changeHandler} name='firstName'
          value={formData.firstName}
        />
        <br /><br />
        <input type="text" placeholder='last name' 
          onChange={changeHandler} name='lastName'
        />
        <br /><br />
        <input type="checkbox"
          onChange={changeHandler} name='isVisible' checked={formData.isVisible}
          id='checkBox'
        />
        <label htmlFor="checkBox">Am I Visible ?</label>
      </form>
    </div>
  );
}

export default App;
