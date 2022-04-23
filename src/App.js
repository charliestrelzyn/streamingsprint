import React, {useState} from 'react'
import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home.js'
import About from './pages/About';
import Contact from './pages/contact/Contact.js';
import Search from './pages/search/Search';
import TitleDetails from './pages/titledetails/TitleDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { StreamSources } from './components/contentDetails/streaminglist/StreamSources';
import {ModeContext} from './context/ModeContext';
import TitleContentDetails from './components/contentDetails/TitleContentDetails';


function App() {

  const [darkMode,setDarkMode]=useState(false);

  const toggleMode=()=>{
    setDarkMode(!darkMode)
    }

  return (
    <Router>
    <div className={darkMode ? "App dark-app-container" : "App app-container"}>
    <ModeContext.Provider value={{darkMode,setDarkMode}}>
      <Navbar toggleMode={toggleMode}/>

      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />}/>
        <Route path="/titledetails/:imdbID" element={<TitleDetails />}/>
        <Route path="/titledetails/:imdbID" element={<StreamSources />}/>
        <Route path="/titledetails/:imdbID" element={<TitleContentDetails />}/>
      </Routes>
      
      <Footer />
      </ModeContext.Provider>
    </div>
    </Router>
    
  );
}

export default App;
