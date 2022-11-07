import React,{useState,createContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import ReactCourse from './components/ReactCourse';
import './App.css'

// export const store = createContext();

const App = () => {
  
  return (
    <div className='app-container'>
   
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Login/>} />
    <Route exact path="/signup" element={<SignUp/>} />
    <Route exact path="/signin" element={<SignIn/>} />
    <Route exact path="/home" element={<Home/>} />
    <Route exact path="/react" element={<ReactCourse/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  )
}

export default App