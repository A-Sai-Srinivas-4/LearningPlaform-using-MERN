import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom'
//import { store } from '../../App'
import "./index.css"

const LoginHeader = () => {
    //const [token,setToken] = useContext(store)
  return (
    <div>
   
      <nav className='nav-container' fixed="top">
      <Link to="/" >
    <img
        src="https://res.cloudinary.com/dcci6hybb/image/upload/v1664186100/aifa-logo_twt3fo.jpg_1_apfoxb.jpg"
        alt="aifa logo"
        className='aifa-logo'
        href='/'
    />
    </Link>
    <h2 className='text-center'>Aifa Learning Platform</h2>
    
    <ul className='login-options-container'>
    
    <Link to="/signin" className='nav-item'><li className='option'>Sign In</li></Link>
    <Link to="/signup" className='nav-item'><li className='option'>Sign Up</li></Link>
    </ul>
    </nav>
    
    </div>
      
  )
}

export default LoginHeader