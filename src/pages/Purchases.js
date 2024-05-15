import React from 'react'
import data from '../data.json'
import Purchase from '../Components/Purchase'


const Purchases = (props) => {

    return (
      <div className='grid grid-cols-3 gap-4 lg:pt-[100px] lg:px-[200px]'>{
        data.merchandise.map((item)=> {
        return <Purchase 
        key={item.id}
        img={item.coverImg}
        title={item.title}
        description={item.description}
        price={item.price}
        />
      })}
      </div>
      

    )
 
}

export default Purchases

