import React from "react";
import { useState } from "react";

//include images into your bundle


//create your first component
const Board= () => {
	const [squareValues, setValues] = useState(["","","","","","","","",""]);

  const [currentPlayer, setCurrentPlayer] = useState("X");
  
  const clickHandler = (index) => {
    const newSquareValues = [...squareValues];
    newSquareValues[index] = currentPlayer == 'X' ? 'X' : 'O';
    setCurrentPlayer(
      currentPlayer == 'X' ? 'O' : 'X'
    );
    setValues(newSquareValues);
  }
  
  return (
  		<>
      <div className="container">
      <div className="row mt-5 d-flex justify-content-center g-0">
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(0)}
          >{squareValues[0]}</button>
        </div>
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(1)}
          >{squareValues[1]}</button>
        </div>
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(2)}
          >{squareValues[2]}</button> 
        </div>
      </div>
      <div className="row d-flex justify-content-center g-0">
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(3)}
          >{squareValues[3]}</button>
        </div>
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(4)}
          >{squareValues[4]}</button>
        </div>
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(5)}
          >{squareValues[5]}</button> 
        </div>
      </div>
      <div className="row d-flex justify-content-center g-0">
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(6)}
          >{squareValues[6]}</button>
        </div>
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(7)}
          >{squareValues[7]}</button>
        </div>
        <div className="col-1">
          <button className="square myBox fs-1 text" onClick={() => clickHandler(8)}
          >{squareValues[8]}</button> 
        </div>
      </div>
      </div>
    </>
	);
};

export default Board;
