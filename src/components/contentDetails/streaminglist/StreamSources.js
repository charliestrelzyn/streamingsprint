import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import './streamsource.css'



export const StreamSources = () => {
    const {imdbID} = useParams();
    const [stream, setStream] = useState([])
    const WATCHMODE_API_KEY = process.env.REACT_APP_WATCHMODE_API_KEY

    const getStreamRequest = async () => {
        const url = `https://api.watchmode.com/v1/title/${imdbID}/sources/?apiKey=${WATCHMODE_API_KEY}`
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)
        setStream(data)
    }


   useEffect(() => {
       getStreamRequest();
   },[])



    const streamFilter = stream.filter(free => free.price === null).map(filterFree => (
      " " + filterFree.name ))

    // const noStreamFilter = stream.filter(paid => paid.price === ` `).map(filterPaid => (
    //   "No Stream Free"
    // )) 

    const streaming =(`${streamFilter}`) 
    // const noStreaming =(`${noStreamFilter}`) 
    
    // const streamingData = streamFilter ? streaming : noStreaming

  return (
    <div className="streamsource-container">
        
      <span className="stream-info">{streaming}</span>
            
       
    </div>
  )
}
