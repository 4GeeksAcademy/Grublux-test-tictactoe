import React from "react";
import { useState } from "react";

//include images or components into your bundle


//create your first component
const Board = ({ currentPlayer, setCurrentPlayer }) => {
  const [squareValues, setValues] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState(null);

  const winningArrays = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
  ];

  const resetGame = () => {
    setValues(["", "", "", "", "", "", "", "", ""]);
    setWinner(null);
    console.log(gameDone);
  }


  const loopThruWinners = (arr) => {

    for (let x of winningArrays) {
      console.log(x);
      var counter = 0;
      for (let [i, elm] of x.entries()) {
        if (elm == 1) {
          if (arr[i] == currentPlayer) {
            counter++;

            if (counter > 2) {
              setWinner(currentPlayer);
            }
          }
        }
      }
      console.log(`The counter is ${counter}`);
      console.log(`The current player is ${currentPlayer}`)
    }
  };






  const clickHandler = (index) => {
    const newSquareValues = [...squareValues]; //copy our array
    newSquareValues[index] = currentPlayer == 'X' ? 'X' : 'O'; //populate index with X or an O
    //change current player to other player
    setCurrentPlayer(
      currentPlayer == 'X' ? 'O' : 'X');
    //run setValues function to update the squareValues array
    setValues(newSquareValues);
    //next we check if the currentPlayer has a winning array
    loopThruWinners(newSquareValues);

  }


  // const checkForWinner = () => {

  // }

  return (
    <>
      <div className="container bg-secondary p-5 mb-3" style={{ display: currentPlayer ? "block" : "none" }}>
        <div className="row d-flex justify-content-center">
          <div className="col-8 text-center text-white bg-secondary">
            <h1>Tic Tac Toe in React.jsx</h1>
          </div>
          <div className="col-8 text-center text-white bg-secondary"
            style={{ display: winner ? "none" : "block" }}>
            <h3>It is {currentPlayer}'s turn</h3>
          </div>
          {/* <div className="col-8 text-center text-white bg-secondary"
            style={{ display: !resetGame ? "none" : "block" }}>
            <h3>It is {currentPlayer}'s turn</h3>
          </div> */}
          <div className="col-8 text-center text-white bg-secondary" style={{ display: winner ? "block" : "none" }}>
            <h3>The winner is {winner}!!!</h3>
          </div>
        </div>
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
        <div className="row text-center text-white bg-secondary" style={{ display: winner ? "block" : "none" }}>
          <div className="col">
            <button className="square myBox fs-3 text"
              onClick={() => resetGame()}>Start a new game!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
