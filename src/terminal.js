import React, { useState } from "react";
import './terminal.css';

function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setHistory([...history, `$ ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="terminal">
      <div className="history">
        {history.map((item, index) => (
            <div key={index}>{item}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKeyPress}
          className="terminal-input"
          autoFocus
        />
      </div>
      <span className="blinking-cursor">_</span>
    </div>
  );
}

export default Terminal;