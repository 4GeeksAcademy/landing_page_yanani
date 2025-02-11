import React from "react";
import Navbar from "./Navbar";
import Jumbotrom from "./Jumbotrom";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {

	// ESTO REVISAR Y EXPLICAR // ENTIENDO LO QUE HACE Y PORQUE PERO NO ENTIENDO LA SINTAXIS
	function repeatCards() {
		let cards = [];
		for (let i = 0; i < 4; i++) {
			cards.push(
				<div key={i} className="col-12 md-6 col-lg-3">
					<Card />
				</div>
			);
		}
		return cards; 
	}
	return (

		<>

			<div>
				<div> <Navbar /> </div>
			</div>	

			<div>
				<div> <Jumbotrom /> </div>
			</div>

			<div className="row">{repeatCards(4)} </div>

			<div>
				<div> <Footer /> </div>
			</div>

		</>

		);
};

export default Home;