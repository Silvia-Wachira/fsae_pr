import React from 'react'

const Purchase = (props) => {
  return (
    <div className='shadow-sm py-4 px-2 text-center border border-grey-200 height: 60%'>
        <div>
            <img alt='purchase-img' className='w-[40px]' src={`../assets/image/${props.img}` }/>
            <p>{props.description}</p>
            <p className='font-bold'>From ksh{props.price}</p>    
            <button className=' bg-purple'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Purchase