import React, { useEffect, useState } from 'react'
import './Popular.css'
import HeadDrops_product from '../Assets/HeadDrops'
import EarOn_product from '../Assets/OnEar'
import BarSound_product from '../Assets/BarSound'
import Item from '../Item/Item'
import next_button from '../Assets/next.png'
import previous_button from '../Assets/previous.png'


const Popular = () => {
  
  const categories = ['HeadDrop', 'EarOn', 'BarSound']
  const [currentCategoryIndex, SetCurrentCategoryIndex] = useState(0)
  

  const handleSlideChange = (index) =>{
    SetCurrentCategoryIndex(index)
  }

  const currentCategory = categories[currentCategoryIndex];
  const products = currentCategory === 'HeadDrop' ? HeadDrops_product : currentCategory === 'EarOn' ? EarOn_product : BarSound_product;

 

  return (
    <div className='popular'>
    <h1>POPULAR IN <span>{currentCategory}</span></h1>
    <div className="popular_items">
      {products.map((item, i) => (
        <Item key={i} 
        id={item.id} 
        name={item.name} 
        image={item.image} 
        new_price={item.new_price} 
        old_price={item.old_price} 
        user_review={item.user_review} 
        />
      ))}
    </div>
    <div className="slider-controls">

    <img src={previous_button} onClick={() => handleSlideChange((currentCategoryIndex - 1 + categories.length) % categories.length)} />

    <img src={next_button} onClick={() => handleSlideChange((currentCategoryIndex + 1) % categories.length)} />
     
    </div>
    <div className="slider-dots">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`slider-dot ${index === currentCategoryIndex ? 'active' : ''}`}
          onClick={() => handleSlideChange(index)}
        ></div>
      ))}
    </div>
  </div>
  )
}

export default Popular
