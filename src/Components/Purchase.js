import React from 'react'
import { Link } from 'react-router-dom'

const Purchase = (props) => {
  return (
    <div className='shadow-sm py-4 px-4 text-center border border-grey-200 h-[500px]'>
        <div className='w-full h-64'>
          <img alt='purchase-img' className='w-full h-full object-cover' src={`../images/${props.img}` }/>
        </div>
        <div className='mt-10 py-6 '>
              <p className=''>{props.description}</p>
              <p className='font-bold mt-3'>From ksh{props.price}</p>    
              <a className='cursor-pointer border rounded  px-2 py-1 mt-4 bg-gray-900 text-white' routerLink="/budget"><Link to="budget"></Link>Add to Cart</a>
        </div>

        
    </div>
  )
}

export default Purchase