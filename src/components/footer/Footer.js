
import React, {useContext} from 'react';
import { ModeContext } from '../../context/ModeContext';
import './footer.css'

const Footer =()=> {

  const {darkMode,setDarkMode}=useContext(ModeContext);

  return (
    <div className={darkMode ? "dark-footer-container" : "footer-container"}>
        <a className={darkMode ? "reference-dark" : "reference"}href="https://www.watchmode.com/">Streaming Data Provided By WatchMode</a>
    </div>
  );
}

export default Footer;
