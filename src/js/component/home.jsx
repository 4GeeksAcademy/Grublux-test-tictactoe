import React from "react";
import { useState } from "react";

//import components
import Board from "./Board";
import Login from "./Login";

//create your first component
const Home = () => {
	const [currentPlayer, setCurrentPlayer] = useState("");

	return (

		<div className="text-center">
			{!currentPlayer && <Login setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} />}
			<Board setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} />
		</div>
	);
};

export default Home;
