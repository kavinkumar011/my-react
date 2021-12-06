import { useState } from "react";

export function EnterQuestion() {

  const [view, setview] = useState(1);
  const [vote, setvote] = useState(1);
  const [show, setshow] = useState("true");

  return (
    <div className="usercontainer">
      <h1>Question</h1>

      <div className="QA-arrange">
        <input placeholder="Enter questions?" />

        <button>AddQuestion</button>
      </div>

      <button onClick={() => {
        setshow(!show);
      }}
        className="Answer"
      >{show ? "Hide" : "Show"}Answer

      </button>
      {show ? <p>A question is an utterance which typically functions as a request for information, which is expected to be provided in the form of an answer. Questions can thus be understood as a kind of illocutionary act in the field of pragmatics or as special kinds of propositions in frameworks of formal semantics such as alternative semantics or inquisitive semantics. Questions are often conflated with interrogatives, which are the grammatical forms typically used to achieve them. Rhetorical questions, for example, are interrogative in form but may not be considered true questions as they are not expected to be answered.</p> : " "}

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
