import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal';


const Purchase = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [counter, setCounter] = useState(1)


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '500px;',
    width: '600px',
    border: '1px solid blue',
    boxShadow:'-6px 4px 10px -2px rgba(103,16,112,0.58);'
    // -webkit-box-shadow: -6px 4px 10px -2px rgba(103,16,112,0.58);
    // -moz-box-shadow: -6px 4px 10px -2px rgba(103,16,112,0.58);
  },
};
 
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleIncrease = () => setCounter(prevCount => prevCount + 1)
  const handleDecrease = () => {
    setCounter(prevCount => prevCount > 1 ? prevCount - 1 : 1)
  }
  

  return (
    <div className='hover:scale-105 py-4 px-4 text-center border border-grey-200 h-[600px] shadow-md'>
        <div className='w-full h-64'>
          <img alt='purchase-img' className='w-full h-full object-cover' src={`../images/${props.img}` }/>
        </div>
        <div className='mt-10 py-6 '>
              <p className=''>{props.description}</p>
              <p className='font-bold mt-3'>From ksh{props.price}</p>  
              <button onClick={openModal} className='cursor-pointer border rounded  px-2 py-1 mt-4 bg-gray-900 text-white hover:bg-purple-900'>
               Add to Cart
              </button>  
        </div>
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Order"
          >
            <div>
              <div className='flex justify-between'>
                  <div>
                    <h2>Order</h2>
                  </div>
                  <div>
                    <button onClick={closeModal}>X</button>
                  </div>
              </div>
              <hr></hr>
              <div>
              <div  className='flex justify-between justify-around items-center h-full p-4'> 
                <div className='w-60 h-64'>
                      <img alt='purchase-img' className='w-full h-full object-cover' src={`../images/${props.img}` }/>
                </div>
                  <div className='h-100'> 
                      <h1>{props.description}</h1>
                      <p>{props.price}</p>
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
                
              </div>
            </div>
            
          </Modal>
    </div>
  )
}

export default Purchase