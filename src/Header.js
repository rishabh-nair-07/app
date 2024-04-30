import Input from './Input';
import './Header.css';

function Header() {
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
            <Input name="name" placeholder="Your Name"></Input>
            <Input name="email" placeholder="Email ID"></Input>
          </div>
          <div className='form-row'>
            <Input name="contact" placeholder="Contact Number"></Input>
            <Input name="city" placeholder="City"></Input>
          </div>
          <textarea placeholder='message'></textarea>
          <img className='captcha' src='images/captcha.svg' alt=''></img>
          <div className='App-form-bottom'>
            <button onClick="" >Submit</button>
          </div>
        </div>
    </div> 
  </div>;
}

export default Header;