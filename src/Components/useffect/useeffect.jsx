import React, { useState, useEffect } from "react";

const Useffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });
  
    return (
    <>
    <div className="container">
    <div className="container-a">
    <h1>useEffect</h1>
    </div>

    
    <div className="button">
    <h2>Rendering time in secs using useeffect concept {count} times!</h2>
    </div>
    </div>
    </>
    )
}
export default Useffect;
