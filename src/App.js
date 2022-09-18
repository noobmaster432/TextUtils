import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//  // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ 
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled!","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been Enabled!","success");
      // setInterval(()=>{
      //   document.title = "Install TextUtils Now!";
      // },1500);
      // setInterval(()=>{
      //   document.title = "TextUtils";
      // },2000);
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>
        {/* <Routes> */}
          {/* <Route path="/about" element={<About mode={mode} />}/> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode}/>}/> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
