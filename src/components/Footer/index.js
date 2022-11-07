import React from 'react'
import {BsTwitter,BsInstagram,BsFacebook} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {FaPhoneAlt} from "react-icons/fa"
import "./index.css"

const Footer = () => {
  return (
    <div>
    <footer className='footer-container'>
    <h1 className='contact-us-heading'>Contact Us</h1>
    <div className='contact-container'>
    <BsTwitter className='icon'/>
    <BsInstagram className='icon'/>
    <BsFacebook className='icon' /> 
    </div>
   
    <div className='contact-container'>
    <HiOutlineMail className='icon mt-1' />
    <p className='mt-2'>info@aifalabs.com</p>
    </div>
    <div className='contact-container'>
    <FaPhoneAlt className="icon mt-1"/>
    <p className='mt-2'>(+1) 469 329 0732</p>
    </div>
    
    
    </footer>
    </div>
  )
}

export default Footer