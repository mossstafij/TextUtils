import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
   
  }
  
  const toggleMode = ()=>
  {
    if(mode==='dark')
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light Mode has been enabled", "success")
      /*
      document.title="TextUtil LightMode"
      setInterval(() => {
        document.title="Install TextUtils"
      }, 1500);
      */
    }
    else
    {
      setMode('dark')
      document.body.style.backgroundColor='#1A4870'
      showAlert("Dark Mode has been enabled", "success")
      /*
      document.title="TextUtil DarkMode"
      setInterval(() => {
        document.title="Install TextUtils"
      }, 1500);
      */
    }
  }

  
  

  
        
   
  
    
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      
        <Routes>
          <Route path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} />
          <Route path="about" element={<About mode ={mode} />} />
          <Route path="home" element={<TextForm heading = "Enter your text to analyse" mode ={mode} showAlert = {showAlert}/>} />
        </Routes>
      </div>
      </BrowserRouter>
  

    </>
 
  );
}


export default App;
