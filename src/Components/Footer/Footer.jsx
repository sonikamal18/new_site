import React from 'react'
import './Footer.css'
import logo from '../Assets/beimaan.png'
import instagram from '../Assets/instagram_icon.png'
 import pintester from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img  src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp} alt="" />
        </div>
            <div className="footer-icon-container">
                <img src={pintester} alt="" />
                 </div>

    </div>
    <div className="footer-copyright">
        <hr/>
        <p>Copyright © 2023. All Rights Reserved.</p>
    </div>
    </div>
  )
}
