import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {Navigate} from "react-router"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import "./index.css"

const Header = () => {
  const [data,setData] =  useState([]);
  useEffect(()=> {
    axios.get('http://localhost:5000/home',{
        headers:{
            'x-token' : localStorage.getItem('token')
        }
    }).then(res => setData(res.data)).catch((err) => console.log(err))
},[])

if (!localStorage.getItem('token')) {
    return <Navigate to="/"  />
}


  return (
    <Navbar bg="light" expand="lg" >
      <Container>
        <Navbar.Brand  href="/home" ><img
        src="https://res.cloudinary.com/dcci6hybb/image/upload/v1664186100/aifa-logo_twt3fo.jpg_1_apfoxb.jpg"
        alt="aifa logo"
        className='aifa-logo'
       
        
        
    /></Navbar.Brand>
    <h3>Aifa Learning Platform</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end ">
          
          <NavDropdown title="Courses" id="basic-nav-dropdown" className='m-3'>
              <NavDropdown.Item href="/react">React</NavDropdown.Item>
              <NavDropdown.Item href="/javascript">
              JavaScript
              </NavDropdown.Item>
              <NavDropdown.Item href="/python">Python</NavDropdown.Item>
              
              <NavDropdown.Item href="/machinelearning">
              Machine Learning
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text >
            <div className='logout-container'>
            Signed in as: {data.username}<br/>
    <Link to="/"><button className='logout-btn' onClick={() => localStorage.removeItem('token')}>Logout</button></Link>
            </div>
            
            
          </Navbar.Text>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;