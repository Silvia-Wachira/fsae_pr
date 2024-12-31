import React, { useState } from 'react'

const CartItems = () => {
    const [open, setOpen] = useState(openCart)
    const [counter, setCounter] = useState(1);


    const handleIncrease = () => setCounter(prevCount => prevCount + 1)
    const handleDecrease = () => {
      setCounter(prevCount => prevCount > 1 ? prevCount - 1 : 1)
    }
  return (
    <div>
        <h1>I am Cart</h1>
        <div id='cart-items' className='flex flex-col w-full ' style={cartStyles}>
        <div className='w-[100%] p-2 flex flex-col flex-1 relative'>
          <div className='flex w-[100%] my-1 relative'>
            <div className='h-[100%] w-[120px] rounded bg-red-300'>

            </div>
            <div className='p-1'>
              <p className='text-gray-500'>{sharedData.title}</p>
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

export default CartItems