import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import Logo from "../assets/logo/pantherlogo.png"
// import {Link} from "react-router-dom"

function Sidebar() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true)
  
  const toggleSidebar = () => setIsShowingSidebar(!isShowingSidebar) 

  return (
    <div className="flex relative z-[1000]" >
      {/* minisidebar */}
      <div className={isShowingSidebar ? "hidden" : 'absolute flex flex-col items-center top-0 bottom-0 left-0 h-screen bg-purple-900 text-[#ffff] w-[50px] lg:hidden px-2 pt-4'}>
      <div>
            <div className='flex items-center justify-between '>
              {/* <div><h1>L</h1></div> */}
              <div >
                <AiOutlineMenu onClick={toggleSidebar} className='cursor-pointer'/>
              </div>
            </div>
       </div>
          <div>
              <ul onClick={toggleSidebar} className='list-none'>
                  <li className=' my-5 gap-2 cursor-pointer'> <AiOutlineHome /> <Link to="/"></Link></li>
                  <li className=' my-5 gap-2 cursor-pointer'> < MdOutlineShoppingCart /></li>
                  <li className=' my-5 gap-2 cursor-pointer'> <FaSackDollar /></li>
                  <li className=' my-5 gap-2 cursor-pointer'> <MdOutlineSettings /></li>
              </ul>
          </div>

      </div>
      {/* Sidebar */}
       <div className={isShowingSidebar ?  " w-72 bg-purple-900 h-screen text-white leading-loose max-h-fit px-10 pt-4 lg:hidden transition ease-in-out " : "hidden"} >
          <div>
            <div className='flex items-center justify-between '>
              <div>
                <img src={Logo} alt='Logo' className='w-[35px]'/>
              </div>
              <div >
                {isShowingSidebar ? 
                <MdOutlineClose onClick={toggleSidebar} className='cursor-pointer'/>:
                <AiOutlineMenu  onClick={toggleSidebar} className='cursor-pointer'/>
                }
              </div>
            </div>
          </div>
          <div>
              <ul>
                  <li className='flex items-center gap-2 cursor-pointer my-2' ><AiOutlineHome /><Link to="/">Home</Link></li>
                  <li className='flex items-center gap-2 cursor-pointer my-2' >< MdOutlineShoppingCart /><Link to="purchases">Purchases</Link></li>
                  <li className='flex items-center gap-2 cursor-pointer my-2' ><FaSackDollar /><Link to="budget">Budget</Link></li>
                  <li className='flex items-center gap-2 cursor-pointer my-2' ><MdOutlineSettings /><Link to="settings">Settings</Link></li>
              </ul>
          </div>
       </div>
      {/* Navbar */}
       <div className=' absolute top-0 left-0 right-0 w-100 bg-purple-900 text-white hidden lg:flex lg:fixed top-0 left-0 right-0 lg:px-[50px] h-[100px] w-[100vw] items-center justify-between px-4'>
          <div className='flex items-center gap-4'>
            <img src={Logo} alt='Logo' className='w-[70px]'/>
            <h1>Title</h1>
          </div>
          <div>
            <ul className='flex items-center gap-4'>
              <li className='cursor-pointer' ><Link to="/">Home</Link></li>
              <li className='cursor-pointer' ><Link to="purchases">Purchases</Link></li>
              <li className='cursor-pointer' ><Link to="budget">Budget</Link></li>
              <li className='cursor-pointer' ><Link to="settings">Settings</Link></li>
            </ul>
          </div>
        </div>
    </div>
    
  )
}

export default Sidebar