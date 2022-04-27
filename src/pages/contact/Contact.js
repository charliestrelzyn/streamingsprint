import './contact.css'
import React, {useContext} from 'react';
import { ModeContext } from '../../context/ModeContext';

function Contact() {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
    <div className={darkMode ? "dark-contact-container" : "light-contact-container" }>
      <h2>Coming soon</h2>
    </div>
  );
}

export default Contact;
