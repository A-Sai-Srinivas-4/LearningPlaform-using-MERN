import React,{useState} from 'react'
import axios from "axios";
import LoginHeader from '../LoginHeader'
import "./index.css"

const SignUp = () => {
    const [data,setData] = useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    })
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/signup',data).then(
            res => alert(res.data)
            
        )
        
    }
  return (
    <>
    <LoginHeader/>
    <div className="sign-up-container">
    <center>
    <form onSubmit={submitHandler}> 
    <h3>Sign Up</h3>
    <input type="text" onChange={changeHandler} name="username" placeholder='User Name' /> <br/>
    <input type="email" onChange={changeHandler} name="email" placeholder='Email' /> <br/>
    <input type="password" onChange={changeHandler} name="password" placeholder='Password' /> <br/>
    <input type="password" onChange={changeHandler} name="confirmpassword" placeholder='Confirm Password' /> <br/>
    <input type="submit"  className="submit-button"value="Sign Up" /> <br/>
    </form>
    </center>
    
    </div>
    </>
    
  )
}

export default SignUp