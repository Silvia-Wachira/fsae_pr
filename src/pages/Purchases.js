import React from 'react'

const Purchases = () => {
  return (
    <>
        <dialog open className='shadow py-3 px-3 items-center'>
           {/* <p>Greetings, one and all!</p> */}
           <form method="dialog">
            <img></img>
            <p>I'm a product</p>
            <p>$15.00</p>
             <button className=''>Add To Cart</button>
           </form>
        </dialog>
    </>
  
  )
}

export default Purchases