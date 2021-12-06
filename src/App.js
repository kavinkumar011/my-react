
import './App.css';
import { EnterQuestion } from './EnterQuestion';
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <EnterQuestion/>
      <UserProfile/>

  
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
