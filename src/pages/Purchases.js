import React, { useState } from 'react'
import data from '../data.json'
import Purchase from '../Components/Purchase'
import { MdOutlineClose } from "react-icons/md";
import { GiHidden } from 'react-icons/gi';




const Purchases = (props) => {



    return (
      <div className='grid grid-cols-3 gap-6 lg:pt-[150px] lg:px-[200px] relative'>{
        data.merchandise.map((item)=> {
        return <Purchase 
        key={item.id}
        img={item.coverImg}
        title={item.title}
        description={item.description}
        price={item.price}
        />
      })}
          {/* <dialog open'>
            
            <div className='flex flex-row-reverse '> <MdOutlineClose /></div>
            <div  className='flex justify-between justify-around items-center h-full'> 
                <div className='h-100'>
                    <img alt='img'></img>
                  </div>
                  <div className='h-100'> 
                      <h1>Product Title</h1>
                      <p>Price</p>
                      <p>Quantity</p>
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
            </div>
          
          </dialog> */}
          
      </div>
      

    )
 
}

export default Purchases

