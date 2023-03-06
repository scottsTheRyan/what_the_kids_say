import React from "react";
import Entry from "./Entry.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry 
          emoji="💪"
          name="Tense Biceps"
          definition="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
        />
        <Entry />
        <Entry />
       
      </dl>
    </div>
  );
}

export default App;
