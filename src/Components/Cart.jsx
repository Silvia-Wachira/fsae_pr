import React, { useEffect, useState } from 'react'
import { FaAngleRight } from "react-icons/fa";

const Cart = (props) => {
  const [counter, setCounter] = useState(1)
  const [open, setOpen] = useState(props.openCart)

  const dummyData = [ 
    {
      "id": 1,
      "title": "bag",
      "description":"Pure leather bag",
      "price": 13600,
      "coverImg": "bag.jpg",
      "stats": {
          "rating": 5.0,
          "reviewCount": 6
      }
  
  },
  {
      "id": 2,
      "title": "LBasketball",
      "description":"High quality basketball",
      "price": 6400,
      "coverImg": "basketball.jpg",
      "stats": {
          "rating": 5.0,
          "reviewCount": 6
      }
  
  },
  {
      "id": 3,
      "title": "Headphones1",
      "description":"Quality beats by Sly.",
      "price": 7900,
      "coverImg": "headphones1.jpg",
      "stats": {
          "rating": 5.0,
          "reviewCount": 6
      }
  
  },
  ]

  useEffect(() => {
    console.log(open)
  },[100000])

  const handleIncrease = () => setCounter(prevCount => prevCount + 1)
  const handleDecrease = () => {
    setCounter(prevCount => prevCount > 1 ? prevCount - 1 : 1)
  }

  const cartStyles = {
    height: "calc(100vh - 100px)",
  };

  const closeCart = () => {
    setOpen(!open)
    }

  return (
    <div className={open ? "z-50 absolute right-0 top-0 bottom-0 w-[350px] bg-white shadow-sm h-screen" : "absolute top-0 bottom-0 right-[-550px]"}>
      <div className='h-[100px] flex p-2 bg-black'>
        <div className='h-full flex items-center'>
          <FaAngleRight onClick={closeCart} className='text-white text-xl cursor-pointer' />
        </div>
        <div className='h-full flex items-center w-full justify-center'>
          <h1 className='text-2xl  text-white '> Cart </h1>
        </div>
      </div>

      {/* Cart items */}
      <div id='cart-items' className='flex flex-col w-full ' style={cartStyles}>
        <div className='w-[100%] p-2 flex flex-col flex-1 relative'>
          <div className='flex w-[100%] my-1 relative'>
            <div className='h-[100%] w-[120px] rounded bg-red-300'>

            </div>
            <div className='p-1'>
              <p className='text-gray-500'>{props.sharedData.title}</p>
              <h2 className='font-bold text-2xl'>$15.00</h2>
              <div className='my-2'>
                <div className='flex items-center justify-between rounded border border-gray'>
                  <div onClick={handleDecrease} className='p-1 mx-1 cursor-pointer'>-</div>
                  <div className='p-1 mx-1 cursor-pointer'>{counter}</div>
                  <div onClick={handleIncrease} className='p-1 mx-1 cursor-pointer'>+</div>
                </div>
                <div>
                  <button className='cursor-pointer border rounded  px-2 py-1 mt-4 bg-gray-900 text-white hover:bg-purple-900'>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className=' top-0 right-0 z-[100] cursor-pointer'>
              <p>X</p>
            </div>
          </div>

          <div className='font-bold text-2xl absolute bottom-0'>
            <h1>Subtotal</h1>
            <h1>$30.00</h1>
          </div>
          
        </div>
        <hr />
        
        <div className='w-[100%] p-2 flex justify-center items-center h-[150px]'>
          <button className='bg-black text-white p-3 rounded w-[80%] h-fit'>View Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Cart