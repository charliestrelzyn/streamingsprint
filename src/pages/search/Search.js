import React, { useContext, useState, useEffect }from 'react'
import TitleList from '../../components/Search/TitleList'
import '../../components/Search/SearchResults.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ModeContext } from '../../context/ModeContext';
import SearchResults from '../../components/Search/SearchResults.js';




const Search =() => {

  const {darkMode,setDarkMode}=useContext(ModeContext);


  return (
    <div className={darkMode? "dark-searchresults-container" : "searchresults-container" }>
            <SearchResults/>
           

    </div>
  )
}

export default SearchResults


