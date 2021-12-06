import { useState } from "react";

export function EnterQuestion() {
  
  const [view, setview] = useState(1);
  const [vote, setvote] = useState(1);

  return (
    <div className="usercontainer">
      <h1>Question</h1>

      <div className="QA-arrange">
        <input placeholder="Enter questions?" />
        <button>AddQuestion</button>

        <input placeholder ="Enter Answer"/>
        <button>Answer</button>
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


  );
  

}




