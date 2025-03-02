import './App.css';
import Alert from './components/Alert';
import About from './components/About'
import Navbar from './components/Navbar';
 import TextFrom from './components/textFrom';

 
 
import React, {useState} from 'react';
import {
  

  Route,
  Routes,
  
  
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert( {
      msg: message,
      type: type
    })
    setTimeout (() => {
      setAlert(null);
    }, 2000)
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light'); 
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
    
  }
  return (
    <>
 
<Navbar title="Textutils" aboutText= "About" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
        <Routes>
          <Route exact path="/about"
            element={<About mode={mode}/>} />
         
          <Route exact path="/"
          element={<TextFrom showAlert={showAlert} heading="Textutils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
            
          
          </Routes>
</div>


  </>
    
  );
}

export default App;
