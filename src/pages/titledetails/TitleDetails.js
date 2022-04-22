import React, {useContext, useState, useEffect} from  'react'
import { useParams } from 'react-router-dom'
import AllTitleDetails from '../titledetails/moretitledetails/AllTitleDetails';
import { OMDB_API_Key } from '../search/SearchResults.js'
import { ModeContext } from '../../context/ModeContext';
import Swipe from './Swipe';
import './TitleDetails.css'


export default function TitleDetails() { 

  const {darkMode,setDarkMode}=useContext(ModeContext);

    const {imdbID} = useParams();

    const [titleDetails, setTitleDetails] = useState([ ])
     
    const getTitleDetailRequest = async () => {
      const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${OMDB_API_Key}`

      const response = await fetch(url);

      const data = await response.json()
      setTitleDetails([data])

    };
    
    useEffect(() => {
      getTitleDetailRequest()
    },[])


    // const sourceName = sources.filter(item=>item.price === null)

  


  return (
      <div>
        <AllTitleDetails titleDetails={titleDetails}/>
        <Swipe titleDetails={titleDetails} className="swipe"/>
        
        <a className={darkMode ? "reference-dark" : "reference"}href="https://www.watchmode.com/">Streaming Data Provided By WatchMode</a>
        </div>
  )
}


