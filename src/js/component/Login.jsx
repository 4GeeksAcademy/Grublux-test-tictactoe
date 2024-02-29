import React from "react";
import { useState } from "react";


//create your first component
const Login = ({setCurrentPlayer}) => {
    
	return (
		<div className="row d-flex justify-content-center p-3" 
        // style={{display: currentPlayer ? "none": "block"}}
        >
			<div className="col-7 text-center text-white bg-dark py-3">
                Choose Your Weapon
            </div>
            <div className="col-7 bg-dark">
                <input placeholder="Player1 Username"/><input placeholder="Player2 Username"/>
            </div>
            <div className="col-7 bg-dark py-3">
            <button className="square loginButton fs-1 text" 
            onClick={() => setCurrentPlayer("X")}>X</button>
            <button className="square loginButton fs-1 text" 
            onClick={() => setCurrentPlayer("O")}>O</button>
            </div>            
        </div>
	);
};

export default Login;