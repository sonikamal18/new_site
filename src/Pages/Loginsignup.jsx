import React from 'react'
import './Css/loginsignup.css'
export const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="login-container">
        <h1>Sign Up</h1>
           <div className="login-field">
            <input type='text' placeholder='Username'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Password'/>
            <input type='password' placeholder='Confirm Password'/>
            <button>Sign Up</button>  
           </div>
            <p className="loginsignup-login">Already have an account? <span>Login</span></p>
            <div className="login-agree">
                <input type="checkbox" />
                <p>I agree with the <a href="">Terms of Service</a> and <a href="">Privacy Policy</a></p>
            </div>
      </div>
    </div>
  )
}
