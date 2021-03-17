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


const Results = () =>(

    <div id="results" className="search-results" >

<div id="id01" className="modal">
  
  <form className="modal-content animate" action="/Site" method="post">
    
    <div className="imgcontainer">
      <span onclick={document.querySelector('#id01').style.display='block'} className="close" title="Close Modal">&times;</span>
      <img src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt="Avatar" className="avatar" />
    </div>

    <div className="container">
    
      <label for="usrname"> <b>Username</b> </label>
      
      <input type="text" placeholder="Enter Username" id="usrname" name="usrname" required />

      <label for="psw"> <b>Password</b> </label>

      <input type="password" placeholder="Enter Password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
        
      <input type="submit" value="Submit" />
      
      <label> <input type="checkbox" checked="checked" name="remember" /> Remember me</label>
    
    </div>

    <div className="container" style={{backgroundColor:"#f1f1f1"}}>
      <button type="button" onClick={document.querySelector('#id01').style.display='block'} className="cancelbtn">Cancel</button>
      <span className="psw">Forgot <a href="#">password?</a></span>
    </div>
    
    <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
        <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
        <p id="number" className="invalid">A <b>number</b></p>
        <p id="length" className="invalid">Minimum <b>8 characters</b></p>
    </div>

    
    </form>

    </div>

    </div>

)

export default Login
