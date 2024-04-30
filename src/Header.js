import Input from './Input';
import './Header.css';
import { useState } from 'react';
import Button from './FormComponents/Button.js'

function Header() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [city,setCity] = useState("");
  const [msg,setMsg] = useState("");
  const [error, setError] = useState(false)

  const updateName = (event) => {
    if(event.target.value !== ""){
      setName(event.target.value);
    }
    else{
      setError(true);
    }

  }

  const updateEmail = (event) => {
    if(event.target.value !== ""){
      setEmail(event.target.value);
    }
    else{
      setError(true);
    }
    
  }

  const updateContact = (event) => {
    if(event.target.value !== ""){
      setContact(event.target.value);
    }
    else{
      setError(true);
    }
    
}

const updateCity = (event) => {
  if(event.target.value !== ""){
    setCity(event.target.value);
  }
  else{
    setError(true);
  }
  
}

const updateMsg = (event) => {
  if(event.target.value !== ""){
    setMsg(event.target.value);
  }
  else{
    setError(true);
  }
}

// function hasError(){
//   if(error===true){
//     let element = document.getElementsByClassName("email");
//   }
// }

  return <div className= "App-header">
      <div className='logo-block'>
        <img className="logo" src= 'images/Logo.svg' alt='App Logo'/>
      </div>
      <div id='watermark'>
          <h1>CONTACT US</h1>
      </div>
      <div className='centre-body'>
        <div className="App-description">
          <h1>
            Need something?<br/> The IPV Squad is <br/>here to help!!
          </h1>
          <p className='orange-label'>
            <img className="Icon" src="images/locationIcon.png" alt=""></img>
            Address
          </p>
          <p>
            DS IKON, near Cars24, Baner, Pune, Maharashtra - 411045
          </p>
          <br/>
          <p className='orange-label'>
              <img className="Icon" src="images/PhoneIcon.png" alt=""></img>
              Contact Information
          </p>
          <p>
              Call : +91 82370 39001 / +91 82370 39002
          </p>
        </div>
        <hr  className='vertical'/>
        <div className="App-form">
          <div className='form-row'>
            <Input onChange={updateName} name="name" placeholder="Your Name"></Input>
            <Input onChange={updateEmail} name="email" placeholder="Email ID"></Input>
          </div>
          <div className='form-row'>
            <Input onChange={updateContact} name="contact" placeholder="Contact Number"></Input>
            <Input onChange={updateCity} name="city" placeholder="City"></Input>
          </div>
          <textarea onChange={updateMsg} placeholder='Message'/>
          <img className='captcha' src='images/captcha.svg' alt=''></img>
          <div className='App-form-bottom'>
            <Button>Submit</Button>
          </div>
        </div>
    </div> 
  </div>;
}

export default Header;