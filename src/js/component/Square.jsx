import React from "react";

import { useState } from "react";



function Square() {
    const [value, setValue] = useState(null);

    const handleClick = () => {
        setValue('X');
    }

    return (
    <button className="square p-5 fs-1 text"
    onClick={handleClick()}
    >
        {value}
    </button>
    )
  }
  
  export default Square;