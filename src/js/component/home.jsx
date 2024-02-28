import React from "react";

//include images into your bundle
import Board from "./Board";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Board />
		</div>
	);
};

export default Home;
