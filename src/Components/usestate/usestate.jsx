import React, { useState } from "react";
import "./usestate.css";

const Usestate = () => {
  const [color, setColor] = useState("red");
  const [textColor, setTextColor] = useState("black");

  const handleColorChange = (newColor) => {
    setColor(newColor);
    

    if(newColor==="red")
    {
        setTextColor("red");
    }
    if(newColor==="blue")
    {
        setTextColor("blue");
    }
    if(newColor==="yellow")
    {
        setTextColor("yellow");
    }
    if(newColor==="orange")
    {
        setTextColor("orange");
    }
    if(newColor==="green")
    {
        setTextColor("green");
    }
    if(newColor==="pink")
    {
        setTextColor("pink");
    }
  };

  return (
    <div className="container">
      <div className="container-a">
        <h1>useState concept</h1>
        <h2 style={{ color: textColor }}>Selected color is {color}!</h2>
      </div>

      <div className="button">
        <button type="button" onClick={() => handleColorChange("blue")}>
          Blue
        </button>
        <button type="button" onClick={() => handleColorChange("red")}>
          Red
        </button>
        <button type="button" onClick={() => handleColorChange("green")}>
          Green
        </button>
        <button type="button" onClick={() => handleColorChange("pink")}>
          Pink
        </button>
        <button type="button" onClick={() => handleColorChange("orange")}>
          Orange
        </button>
        <button type="button" onClick={() => handleColorChange("yellow")}>
          Yellow
        </button>
      </div>
    </div>
  );
};

export default Usestate;
