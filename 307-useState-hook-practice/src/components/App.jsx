import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString("en-FI");
  const [currentTime, setCurrentTime] = useState(time);

  const getCurrentTime = () => {
    let newTime = new Date().toLocaleTimeString("en-FI");
    setCurrentTime(newTime);
  };

  setInterval(getCurrentTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={getCurrentTime}>Get Time</button>
    </div>
  );
}

export default App;
