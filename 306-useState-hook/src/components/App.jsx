import React from "react";

function App() {
  const [state, setState] = React.useState(0);
  //console.log(`the first log ${state}`);
  const increase = () => {
    //console.log(`the second log ${state}`);
    setState(state + 1);
    //console.log(`the third log ${state}`);
  };
  const decrease = () => {
    setState(state - 1);
  };

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
