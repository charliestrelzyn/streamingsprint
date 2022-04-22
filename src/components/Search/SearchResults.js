import React, { useContext, useState, useEffect }from 'react'
import SearchBar from '../Search/searchbar/SearchBar';
import TitleList from './TitleList'
import './SearchResults.css';
import { useNavigate, useParams } from 'react-router-dom';
import { ModeContext } from '../../context/ModeContext';

export const OMDB_API_Key = process.env.REACT_APP_OMDB_API_KEY


const SearchResults =() => {
 const [titles, setTitles] = useState([]) 
 const [searchValue, setSearchValue] = useState(' ')

 const {darkMode,setDarkMode}=useContext(ModeContext);

  

 const getTitleRequest = async (searchValue) =>{

 
   
   const url = `https://www.omdbapi.com/?s=${searchValue}}&apikey=${OMDB_API_Key}`

   const response = await fetch(url);
   const data = await response.json();
   if (data.Search) {
     setTitles(data.Search)
   }
 }

  useEffect(() =>{
    getTitleRequest(searchValue)
  },[searchValue]);

  

  return (
    <div className={darkMode? "dark-searchresults-container" : "searchresults-container" }>
            <div className="searchbar">
             <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className="movie-list-container">
              <TitleList  titles={titles}/>
          </div>
    </div>
  )
}

export default SearchResults


