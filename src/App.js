import React, {useState} from "react";
import './App.css';

import Nav from './Nav.js'
import Textform from './TextForm'
import Alert from './Alert'
// import About from './About'

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null);

  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";

      showAlert('tHIS IS dARK',"success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert('tHIS IS light',"success");

    }
  }

  const showAlert =(message,type) =>{
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }



  return (
    <>
    <Nav title="Taxi" about="About Us" contact="Contact Us" showAlert={showAlert} toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <Textform showAlert={showAlert}/>
    
    </>
  );
}

export default App;
