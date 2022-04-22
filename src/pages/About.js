
import './about.css'
import React, {useContext} from 'react';
import { ModeContext } from '../context/ModeContext';

function About() {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
    <div className={darkMode ? "dark-about-container" : "light-about-container" }>
      <h1>About</h1>
    </div>
  );
}

export default About;
