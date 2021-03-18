import React,{useState} from 'react'

import './LoginScript'

function Login() {

  const [showResults, setShowResults] = useState(false)
  
  const onClick = () => setShowResults(true)

  
return (
    
    <div>
        <input type="submit" value="Login" onClick={onClick} style={{width:"auto"}} />
        { showResults ? <Results /> : null }
    </div>
    
  )
}


const Results = () =>{
  const [showResults1, setShowResults1] = useState(true)
  const [showMessage, setShowMessage] = useState(false)
  
  var myInput = document.getElementById("psw");

  var modal = document.querySelector("#id01");
  
  const onClickOne = () => setShowResults1(false)

  const change = (e)=> {

    e.preventDefaults();

    var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    alert(`Password doesn't have minimum number of LowerCase Letters `);
  }
  
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    alert(`Password doesn't have minimum number of UpperCase Letter `);
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    alert(`Password doesn't have minimum number of integers `);
  }
  
  if(myInput.value.length >= 8) {
   alert('Password Length is smaller than 8'); 
  
     }
  }
  
return(
    <div id="results" className="search-results" >


<div id="id01" className="modal">
  
  <form className="modal-content animate" action="/Site" method="post">
    
    <div className="imgcontainer">
      <span onclick={onClickOne} className="close" title="Close Modal">&times;</span>
      <img src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt="Avatar" className="avatar" />
    </div>

    <div className="container">
    
      <label for="usrname"> <b>Username</b> </label>
      
      <input type="text" placeholder="Enter Username" id="usrname" name="usrname" required />

      <label for="psw"> <b>Password</b> </label>

      <input type="password" onChange={(e) => { change()}} placeholder="Enter Password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        
      <input type="submit" value="Submit" />
      
      <label> <input type="checkbox" checked="checked" name="remember" /> Remember me</label>
    
    </div>

    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
      <button type="button" onClick={onClickOne} className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
    
    
    </form>

    </div>


    </div>

)}

export default Login
