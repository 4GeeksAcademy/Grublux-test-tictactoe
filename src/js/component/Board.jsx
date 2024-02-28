import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Board= () => {
	return (
		<>
         <>
      <div className="board-row">
        <button className="square p-5 fs-1 text"
    >X</button>
     <button className="square p-5 fs-1 text"
    >X</button>
        <button className="square p-5 fs-1 text"
    >X</button>
      </div>
      <div className="board-row">
        <button className="square p-5 fs-1 text"
    >X</button>
     <button className="square p-5 fs-1 text"
    >X</button>
        <button className="square p-5 fs-1 text"
    >X</button>
      </div><div className="board-row">
        <button className="square p-5 fs-1 text"
    >X</button>
     <button className="square p-5 fs-1 text"
    >X</button>
        <button className="square p-5 fs-1 text"
    >X</button>
      </div>
    </>
        </>
	);
};

export default Board;
