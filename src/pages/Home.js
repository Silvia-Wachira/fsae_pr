import React from "react";
import Button from "../Components/Button";
import Img from "../assets/images/bball.jpg"
import { Link } from "react-router-dom";

const Home = () => {
	   return(
		<>
			  {/* <div className="">
					<h1 className="align items-center">PANTHERS MOTORSPORTS</h1>
					<p>Welcome to Panthers motorsports page</p>
			  </div> */}
			  <div className="">
			  <a href="/purchases" class="button">SHOP</a>
			  	{/* <a routerLink="/purchases"><Link to="purchases">SHOP</Link></a> */}
			  	<img src={Img} alt='Img' className='bg-cover'  />
				
			  </div>
		</>
	   )
}
export default Home;
