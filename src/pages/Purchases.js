import React from 'react'

const Purchases = (props) => {
  return (
    <div className='flex'>
      <span>{props.title}</span>
      <img className='overflow-auto' src={`../assets/image/${props.img}`}/>
      <p>{props.description}</p>
      <p><span>From ${props.price}</span></p>    
    </div>
  
  )
}

export default Purchases

