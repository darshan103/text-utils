import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert("Dark mode is now enabled", "Success")
      document.title = "TextUtils-Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode is now enabled", "Success")
      document.title = "TextUtils-Light Mode"
    }
  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <>
      <div className="container"></div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <TextForm heading="Enter the text to analyse:" showAlert={showAlert} mode={mode} /> */}
      {/* <About /> */}

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<TextForm heading="Try TextUtils- word counter, character counter, remove extra spaces" showAlert={showAlert} mode={mode} />} />
            <Route path="textform" element={<TextForm heading="Try TextUtils- word counter, character counter, remove extra spaces" showAlert={showAlert} mode={mode} />} />
            <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
