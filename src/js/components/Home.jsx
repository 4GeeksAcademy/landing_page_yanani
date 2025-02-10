import React from "react";
import Navbar from './Navbar';
import Jumbotrom from './Jumbotrom'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
	return (

		<div>
			<div> <Navbar/> </div>
		</div>,	

		<div>
		<div> <Jumbotrom/> </div>
		</div>,

		<div>
		<div> <Card/> </div>
		</div>,

		<div>
		<div> <footer/> </div>
		</div>,	
		
		);
};

export default Home;