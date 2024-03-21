import React, { useState } from "react";
import './bg-changer.css';

function BgChanger() {
  const [background, setBackground] = useState('#000000');

  function change() {
    const randomColor = "#" + Math.round(Math.random() * 10000000).toString(16);
    setBackground(randomColor);
  }

  return (
    <div style={{ backgroundColor: background }}>
      <button onClick={change}>Change Background</button>
    </div>
  );
}

export default BgChanger;