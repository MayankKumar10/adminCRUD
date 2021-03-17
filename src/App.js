import React, {useState} from 'react';

import Site from './components/Site';
import Nav from './components/Nav';

import Login from './components/Login';

const App = () => {

  const [table ,setTable]= useState('false');

  
  const changeTable = () =>{
    setTable({table: 'true'})
  }

  return (
    <div>

      <Login />
      <Nav />
      <Site />
    
    

    </div>
  )
}

export default App
