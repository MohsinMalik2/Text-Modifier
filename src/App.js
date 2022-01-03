import React, {useState} from "react";
import './App.css';

import Nav from './Nav.js'
import Textform from './TextForm'
// import About from './About'

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode=()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }




  return (
    <>
    <Nav title="Taxi" about="About Us" contact="Contact Us" toggleMode={toggleMode} mode={mode}/>
    <Textform/>
    
    </>
  );
}

export default App;
