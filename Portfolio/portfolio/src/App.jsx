import './App.css'
import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Resume from './components/Resume';
import Projects from './components/Projects';
import Preload from './components/Preload';
import Navbar from './components/Navbar';
import "./style.css";
import {BrowserRouter as Router,
    Routes, 
    Route, 
    Navigate
} from "react-router-dom";

function App() {

  const [load, updateLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preload load = {load}/>
      <div className="App" id = {load ? "no-scroll" : "scroll"}>
        <Navbar />

        {/**
         * scroll to top on refresh
         */}
         
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<Navigate to = "/"/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
