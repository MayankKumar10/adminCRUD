import React, {useState} from 'react';
import Site from './components/Site';
import Nav from './components/Nav';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {

  const [table ,setTable]= useState('false');

  
  const changeTable = () =>{
    setTable({table: 'true'})
  }

  return (

      <div >
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Nav} />
            <Route path="/" component={Site} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>

    
  )
}

export default App
