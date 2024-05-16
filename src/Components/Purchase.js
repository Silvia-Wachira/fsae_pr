import React from 'react'
import { Link } from 'react-router-dom'

const Purchase = (props) => {
  return (
    <div className='shadow-sm py-4 px-2 text-center border border-grey-200 h-[300px]'>
        <div>
            <img alt='purchase-img' className='w-[40px]' src={`../assets/image/${props.img}` }/>
            <p>{props.description}</p>
            <p className='font-bold'>From ksh{props.price}</p>    
            {/* <button className=' bg-purple'>Add to Cart</button> */}
            <a className='cursor-pointer border rounded px-2 py-1 bg-gray-900 text-white' routerLink="/budget"><Link to="budget"></Link>Add to Cart</a>
        </div>
    </div>
  )
}

export default Purchase