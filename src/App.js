
import './App.css';
import { EnterQuestion } from './EnterQuestion';
import { useState } from "react";
import { SearchTag } from './SearchTag';
import { Companieslist } from './Companieslist';
import AppBar from '@mui/material/AppBar';
import {Route,Switch,Link} from 'react-router-dom';



function App() {
  const styles={color:"white"}
  
  return (
    <div className="App">
      <AppBar position="static">
        
        <div className="navbar">
        
        <Link to="/UserProfile" style={styles}>UseProfile</Link>
        <Link to="/EnterQuestion" style={styles}>EnterQuestion</Link>
        <Link to="/SearchTag" style={styles}>SearchTag</Link>
        <Link to="/CompaniesList" style={styles}>CompaneisList</Link>
        </div>

      </AppBar>

     <Switch>
       <Route path="/UserProfile">
         <UserProfile/>

       </Route>
       <Route path="/EnterQuestion">
         <EnterQuestion/>

       </Route>
       <Route path="/SearchTag">
         <SearchTag/>

       </Route>
       <Route path="/Companieslist">
         <Companieslist/>

       </Route>
     </Switch>
      
    </div>
  );
}


function UserProfile(){

  const [view, setview] = useState(1);
  const [vote, setvote] = useState(1);

  return(
    <div className="userdetails">
      <h2>UserProfile</h2>
      <input placeholder="Enter your UserName"/>
      <input placeholder ="Enter your password"/>
      <div>
      <button className="loginbutton"> Login</button>
      </div>
      
      <div className="buttonarrange">
        <button onClick={() => {
          setview(view + 1);
        }}
        >views{view}</button>

        <button onClick={() => {
          setvote(vote + 1);
        }}
        >votes{vote}</button>  
      </div>
    
    </div>
   
  )
}
export default App;
