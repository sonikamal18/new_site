
 import React, { useState } from 'react'
 import './Navbar.css'
  import logo from '../Assets/beimaan.png'
  import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
 export const Navbar = () => {

  const [menu ,setmenu] =useState("shop")
   return (
    
     <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
            <p>SHOPPER</p>
            
                    </div>
        <ul className="nav-menu">
          <li onClick={()=>{setmenu("shop")}}> <Link  style={{textDecoration:"none", color:"black"}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("mens")}}>  <Link  style={{textDecoration:"none" , color:"black"}} to='/mens'>Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("womens")}}> <Link  style={{textDecoration:"none" , color:"black"}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setmenu("kids")}}>  <Link  style={{textDecoration:"none" , color:"black"}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
        <Link  style={{textDecoration:"none"}} to='/login'><button>Login</button></Link>   
         <Link  style={{textDecoration:"none"}} to='/cart'> <img src={cart_icon}  alt="" /></Link>
        <div className="nav-cart-count">0</div>
        </div>
        
     </div>
   )
 }
 