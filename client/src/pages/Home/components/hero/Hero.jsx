import React from 'react'
import './hero.css'
import bg from '../../../../assets/herobg.png'
import bgmd from '../../../../assets/herobgmd.png'
function Hero() {
  return (
    <div className='hero'>
        <div className='hero-background-image'>
             <img className='bg' src={bg} alt="background-image" />
             <img className='bgsd' src={bgmd} alt="background-image" />
        </div>
        <div className='hero-text'> 
            <div>
               <h1>MENU</h1>
               <div className='hero-text-sub-div'>
               <a>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</a>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Hero