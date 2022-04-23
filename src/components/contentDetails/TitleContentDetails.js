import React, { useContext } from 'react';
import '../../pages/titledetails/TitleDetails.css';
import { StreamSources } from '../contentDetails/streaminglist/StreamSources';
import { ModeContext } from '../../context/ModeContext';
import SwipeableViews from 'react-swipeable-views'
import Swipe from './swipe/Swipe'




const TitleContentDetails = ({titleDetails}) => {
 
    const {darkMode,setDarkMode}=useContext(ModeContext);


    return (
        <>
            {titleDetails.map((titleDetail)=> 
                <div className={darkMode ? "dark-title-details-container" : "title-details-container"}>
                    {/* TITLE */}
                    <div className='title-container'>
                        <h2>{titleDetail.Title}</h2>
                    </div>

                    {/* STREAMING INFO  */}
                    <div className="streaming-content-container">
                        <div className="streaming-content">
                            <p className="stream-header">Streaming On:</p>
                            <StreamSources/>
                        </div>
                    </div>
                        <div className="desktop-container">
                            <div className='image-container'>  
                                <img className="title-image" src={titleDetail.Poster} alt=''></img>
                            </div>
                           
                            <div className={darkMode ? "dark-details-container" : "details-container"}>
                        
                                <div className={darkMode? "dark-title-info-container" : "title-info-container"}>
                                
                                    <p className="title-info">Title: <span> {titleDetail.Title}</span></p>
            
                                    <p className="title-info">First Released: <span className="title-results">{titleDetail.Released}</span></p>

                                    <p className="title-info">Plot: <span className="title-results">{titleDetail.Plot}</span></p>

                                    <p className="title-info">Year: <span className="title-results"> {titleDetail.Year}</span></p>
                                    
                                    <p className="title-info">Runtime: <span className="title-results">{titleDetail.Runtime}</span></p>

                                    <p className="title-info">Awards: <span className="title-results">{titleDetail.Awards}</span></p>

                                    <p className="title-info">Director: <span className="title-results">{titleDetail.Director}</span></p>

                                    <p className="title-info">Actors: <span className="title-results">{titleDetail.Actors}</span></p>

                                    <p className="title-info">Writer: <span className="title-results">{titleDetail.Writer}</span></p>

                                    <p className="title-info">Genre: <span className="title-results">{titleDetail.Genre}</span></p>

                                    <p className="title-info">Rated: <span className="title-results">{titleDetail.Rated}</span></p>

                                    <p className="title-info">Type: <span className="title-results">{titleDetail.Type}</span></p>

                                    <p className="title-info">Country: <span className="title-results">{titleDetail.Country}</span></p>

                                    <p className="title-info">Box Office: <span className="title-results">{titleDetail.BoxOffice}</span></p>

                                    <p className="title-info">IMDB Rating: <span className="title-results">{titleDetail.Ratings[0].Value}</span></p>
                                
                                </div>
                        
                        
                                </div>
                        </div>
                        <div className={darkMode ? "dark-mobile-container" : "mobile-container"}>
                        <Swipe titleDetails={titleDetails} className="swipe"/>
                        </div>
                    </div>

                

            )}
            
        </>
    )
}

export default TitleContentDetails