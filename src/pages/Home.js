import React from "react";
import Button from "../Components/Button";
import Img from "../assets/img/bball.jpg"

const Home = () => {
	   return(
		<>
			  {/* <div className="">
					<h1 className="align items-center">PANTHERS MOTORSPORTS</h1>
					<p>Welcome to Panthers motorsports page</p>
			  </div> */}
			  <div className="">
			  	<button className="">SHOP NOW</button>
			  	<img src={Img} alt='Img' className='bg-cover'  />
				
			  </div>
		</>
	   )
}
export default Home;
