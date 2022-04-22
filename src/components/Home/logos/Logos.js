import React, {useState, useContext} from 'react';
import './Logos.css'
import { ModeContext } from '../../../context/ModeContext';


export default function Logos() {
    
    const {darkMode,setDarkMode}=useContext(ModeContext);

    // DARK MODE IMAGES
    const appleTvDark = darkMode ? "/images/appletvplus_logo_white.png" : "/images/appletvplus_logo.png"
    const disneyDark = darkMode ? "/images/disneyplus_logo_white.png" : "/images/disneyplus_logo.png"
    const britboxDark = darkMode ? "/images/britbox_logo_white.png" : "/images/britbox_logo.png"
    const amazonDark = darkMode ? "/images/amazonprime_logo_white.png" : "/images/amazonprime_logo.png"
    const HBODark = darkMode ? "/images/hbomax_logo_white.png" : "/images/hbomax_logo.png"
    
  return (
        <div className="logo-container">
            <div>
                <img className="logo" src="/images/netflix_logo.png"/>
                <img className="logo" src={`${amazonDark}`}/>
                <img className="logo" src={`${disneyDark}`}/>
                <img className="logo" src={`${appleTvDark}`}/>
            </div>
            <div>
                <img className="logo britbox" src={`${britboxDark}`}/>
                <img className="logo" src={`${HBODark}`}/>
                <img className="logo" src="/images/hulu_logo.png"/>
            </div>
        </div>
  )
}




