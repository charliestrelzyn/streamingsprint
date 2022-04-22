import React, {useContext} from 'react'
import './Searchbox.css'
import { ModeContext } from '../../../context/ModeContext.js';



const SearchBar =(props) => {
    
    const {darkMode,setDarkMode}=useContext(ModeContext);

    return (
        <div className="search-bar">
            <input className={darkMode ? "dark-search-input" : "search-input"} placeholder="Search here" value={props.value}onChange={(event)=>{ 
                props.setSearchValue(event.target.value)    
            }}/>
            <div className="search-border"></div>
            
        </div>
    )
}

export default SearchBar