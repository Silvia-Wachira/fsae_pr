import React from "react";
import Button from "../Components/Button";
import Img from "../assets/bball.jpg"
import { Link } from "react-router-dom";

const Home = () => {
	   return(
		<div className=" bg-cover bg-center"> 
			  <div className="">
			  	<img src={Img} alt='Img'  />
				<a href="/purchases" >
					<button>SHOP</button>
				</a>
			  </div>
		</div>
	   )
}
export default Home;
