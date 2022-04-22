import React, {useState, useEffect, useContext} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ModeContext } from '../../context/ModeContext';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';

const Navbar = ({toggleMode}) => {
 
const {darkMode,setDarkMode}=useContext(ModeContext);


const [click, setClick] = useState(false)

const handleClick = () => setClick(!click)
const closeMobileMenu = ()=> setClick(false);

const activeMenu = click ? "nav-menu active" || "dark-nav-menu active": " nav-menu"
const darkMenu = darkMode ? "dark-nav-menu" : "nav-menu"

const darkModeLink = darkMode ? "dark-link" : "link" 

return (
    <>
      <div className={darkMode ? "dark-header-container" : "header-container" }>
      
    
        <IconContext.Provider value={darkMode ? {color: '#fff'} : {color: '#1b1f24'}}>  
        <div>
          <nav className={darkMode ? 'dark-navbar' : 'navbar'}>

             {/* DARK MODE BUTTON */}

             <button className={darkMode ? 'light-btn' : 'dark-btn'}onClick={toggleMode}> {darkMode ? "Light Mode" : "Dark Mode"}</button>

            <div className='navbar-container container'>
                <div className={'menu-icon'} onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars /> }
                </div>

                <ul className={`${activeMenu} ${darkMenu}` }>
                  
                  <li className='nav-item nav-links'><Link to="/" className = {darkModeLink} onClick={closeMobileMenu}>Home</Link></li>

                  <li className='nav-item nav-links'><Link to="search" className={darkModeLink} onClick={closeMobileMenu}>Search</Link></li>

                   <li className='nav-item nav-links'><Link to="/about" className={darkModeLink} onClick={closeMobileMenu}>About</Link></li>

                   <li className='nav-item nav-links'><Link to="contact" className={darkModeLink } onClick={closeMobileMenu}>Contact</Link></li>
                </ul>
             </div>
        
           </nav>
    </div>
    </IconContext.Provider>
    </div>
    </>
  );

}

export default Navbar;