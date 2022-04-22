import React, {useState} from 'react'
import './App.css';
import Navbar from './components/header/Navbar';
// import Header from './components/header/Header';
import Home from './pages/home/Home.js'
import About from './pages/About';
import Contact from './pages/contact/Contact.js';
import SearchResults from './pages/search/SearchResults';
import TitleDetails from './pages/titledetails/TitleDetails';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { StreamSources } from './pages/titledetails/streaminglist/StreamSources.js';
import {ModeContext} from './context/ModeContext';
import AllTitleDetails from './pages/titledetails/moretitledetails/AllTitleDetails.js';


function App() {

  const [darkMode,setDarkMode]=useState(false);

  const toggleMode=()=>{
    setDarkMode(!darkMode)
    }

  return (
    <Router>
    <div className="App">
    <ModeContext.Provider value={{darkMode,setDarkMode}}>
      <Navbar toggleMode={toggleMode}/>

      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/search" element={<SearchResults />} />
        <Route path="/" element={<Home />}/>
        <Route path="/titledetails/:imdbID" element={<TitleDetails />}/>
        <Route path="/titledetails/:imdbID" element={<StreamSources />}/>
        <Route path="/titledetails/:imdbID" element={<AllTitleDetails />}/>
      </Routes>
      
      {/* <Footer /> */}
      </ModeContext.Provider>
    </div>
    </Router>
    
  );
}

export default App;
