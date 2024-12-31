import React, { useState } from 'react'
import data from '../data.json'
import Purchase from '../Components/Purchase'
import Cart from '../Components/Cart'
import Dialog from '../Components/Dialog.jsx';

const Purchases = (props) => {
  const [sharedData, setSharedData] = useState({})
  const [openCart, setOpenCart] = useState(true)

    return (
      <div>
          <div className=' relative w-[100vw] overflow-x-hidden'>
            <div className='w-full grid grid-cols-3 gap-6 lg:pt-[150px] lg:px-[200px]'>
                {
                  data.merchandise.map((item)=> {
                  return <Purchase 
                  key={item.id}
                  img={item.coverImg}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  setSharedData = {setSharedData}
                  setOpenCart = {setOpenCart}
                  />
                })}
            </div>
            <Cart className='fixed top-0 bottom-0 right-0'
              sharedData={sharedData}
              openCart={openCart}
            />
          </div>
          <Dialog />
      </div>
    )
}
export default Purchases

