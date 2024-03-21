import React, { useState } from 'react';


function BgColorSelector() {
  const [background, setBackground] = useState('#000000');

  function changeBackground() {
    const randomColor = "#" + Math.round(Math.random() * 10000000).toString(16);
    setBackground(randomColor);
  }

  function handleColorChange(event) {
    setBackground(event.target.value);
  }

  return (
    <div class="changer" style={{ backgroundColor: background }}>
      <h1>Background Color Changer</h1>
      <input
        type="color"
        value={background}
        onChange={handleColorChange}
      />
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
}

export default BgColorSelector;
