import React from "react";
import Login from "./Login";

let isLoggedIn = false;
const currentTime = new Date().getHours();

const isLoggedInToggle = () => {
  isLoggedIn = !isLoggedIn;
  console.log(isLoggedIn);
};

function App() {
  return (
    <div className="container">
      {
        //isLoggedIn ? <h1>Hello!</h1> : <Login onClick={isLoggedInToggle} />
        isLoggedIn ? (
          currentTime > 9 && currentTime < 18 && <h1>Hello!</h1> //render Hello only if all turnaries are true
        ) : (
          <Login onClick={isLoggedInToggle} />
        )
      }
    </div>
  );
}
export default App;
