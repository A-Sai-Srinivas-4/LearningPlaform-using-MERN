import React,{useState,useContext,useEffect} from 'react'
import CardItem from '../CardItem';
import Header from '../Header';
import Learning from "../../Learning.jpg"
import Projects from "../../Projects.jpg"
import Docs from "../../Docs.jpg"
import Quiz from "../../Quiz.jpg"
import { store } from '../../App'
import {Navigate} from "react-router"
import axios from 'axios';
import "./index.css"

const ReactCourse = () => {
    
    const [data,setData] = useState(null);
    useEffect(()=> {
        axios.get('http://localhost:5000/react',{
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
        
    <div className='react-container'>
    <CardItem details="React Full Course Videos" img={Learning} link="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/30649106?start=225#overview"/>
    <CardItem details="React Projects" img={Projects} link="https://www.udemy.com/course/react-tutorial-and-projects-course/learn/lecture/12499178#overview"/>
    <CardItem details="React Docs" img={Docs} link="https://reactjs.org/docs/getting-started.html" />
    <CardItem details="React Quiz" img={Quiz} link="https://google.com" /> <br/>
    
    </div>
    }
    </>
    
  
    
  )
}

export default ReactCourse
