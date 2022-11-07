import React,{useState,useContext} from 'react'
import axios from "axios";
import { store } from '../../App';
import {Navigate} from 'react-router'
import LoginHeader from '../LoginHeader'
import "./index.css"

const SignIn = () => {
    const [auth,setAuth] = useState(false);
    const [data,setData] = useState({
        email:"",
        password:"",
    })
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signin',data).then(
            res => {localStorage.setItem('token',res.data.token);setAuth(true)}
        )
    }
    if(auth) {
        return <Navigate to="/home" />
    }
    
  return (
    <>
    <LoginHeader/>
    <center>
    <div className="sign-in-container">
    <form onSubmit={submitHandler}> 
    <h3>Sign In</h3>
    <input type="email" onChange={changeHandler} name="email" placeholder='Email' autoComplete='on' /> <br/>
    <input type="password" onChange={changeHandler} name="password" placeholder='Password' /> <br/>
    <input type="submit" value="Sign In" className="login-button" /> <br/>
    </form>
    </div>
    </center>
    
  

    </>
      )
}

export default SignIn

