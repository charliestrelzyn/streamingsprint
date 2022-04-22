import React, {useContext, useState, useEffect} from  'react'
import { useParams } from 'react-router-dom'
import TitleContentDetails from '../../components/contentDetails/TitleContentDetails';
import { OMDB_API_Key } from '../../components/Search/SearchResults'
import { ModeContext } from '../../context/ModeContext';
import Swipe from '../../components/contentDetails/swipe/Swipe';
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

  


  return (
      <div>
        <TitleContentDetails titleDetails={titleDetails}/>
        <Swipe titleDetails={titleDetails} className="swipe"/>
        
        <a className={darkMode ? "reference-dark" : "reference"}href="https://www.watchmode.com/">Streaming Data Provided By WatchMode</a>
        </div>
  )
}


