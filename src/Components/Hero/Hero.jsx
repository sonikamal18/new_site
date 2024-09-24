import React from 'react'
import './Hero.css'
import  welcome_icon from '../Assets/welcome_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2  className='arival'>NEW ARRIVALS</h2>

               <div>
                      <div className="hero-hand-icon">
                        <p>New</p>
                       <img src={welcome_icon} alt="" />
                     </div>

                      <p>Collections</p>
                      <p>For Eyeryone</p>
                </div>

             <div className="hero-latest-btn">
                <div> Latest Collection</div>
                <img src={arrow_icon} alt="" />
             </div>
        </div>















        <div className="hero-right">
          <img src={hero_img} alt="" />
        </div>
    </div>
  )
}
