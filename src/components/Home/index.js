import React,{useState,useEffect} from 'react'
import { store } from '../../App'
import Header from '../Header'
import CardItem from '../CardItem'
import {Navigate} from "react-router"
import axios from 'axios';

const Home = () => {
   
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
    <>
    <Header/>
   
    {
        data && 
    
    <center>
    <div className='home-container'>
    <CardItem  details="View Course" link="react" img="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_170805.png"/>
    </div>
    

    </center>
    }
    
    
    </>
   
  )
}

export default Home

