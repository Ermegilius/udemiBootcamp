"use strict";

import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  const handleInputText = (event) => {
    const newItem = event.target.value;
    setInputText(newItem);
  };

  const handleSetItems = (event) => {
    event.preventDefault();
    setItems((prev) => {
      return [...prev, inputText];
    });
    setInputText("");
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInputText} value={inputText} />
        <button type="submit" onClick={handleSetItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
