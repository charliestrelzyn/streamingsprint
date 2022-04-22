import './contact.css'
import React, {useContext} from 'react';
import { ModeContext } from '../../context/ModeContext';

function Contact() {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
    <div className={darkMode ? "dark-contact-container" : "light-contact-container" }>
      <h1>Contact</h1>
    </div>
  );
}

export default Contact;
