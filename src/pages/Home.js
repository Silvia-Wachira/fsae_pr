import React from "react";
// import Button from "../Components/Button";
import Img from "../assets/bball.jpg"
// import Img from "../assets/boxer.jpg"
// import { Link } from "react-router-dom";

const Home = () => {
	   return(
		<div className=" "> 
			  <div className="">
			  	<img  src={Img} alt='Img'  />
				 <a href="/purchases" className="">
					<button className="text-white absolute inset-0 items-center justify-center">SHOP</button>
				</a> 
				 
			  </div>
		</div>
	   )
}
export default Home;
