import React from 'react'
import CarouselContainer from '../CarouselContainer'
import LoginHeader from '../LoginHeader'
import "./index.css"


const Login = () => {
  return (
    <>
    <LoginHeader/>
    <div className='login-container'>
    <div className='login-page-container'>
    <img
    src="https://res.cloudinary.com/dcci6hybb/image/upload/v1664185716/aifa-logo_twt3fo.svg"
    alt="aifa"
    className='aifa-image'
   
    />
    <CarouselContainer/>
    </div>
    </div>
    </>
    
  )
}

export default Login