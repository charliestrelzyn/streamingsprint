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
            {titleDetails.map((titleDetail, index)=> 
                <div className={darkMode ? "dark-title-details-container" : "title-details-container"} key={index}>
                    {/* TITLE */}
                    <div className='title-container'>
                        <h2 key={titleDetail.Title}>{titleDetail.Title}</h2>
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
                                <img className="title-image" key={titleDetail.Poster}src={titleDetail.Poster} alt=''></img>
                            </div>
                           
                            <div className={darkMode ? "dark-details-container" : "details-container"}>
                        
                                <div className={darkMode? "dark-title-info-container" : "title-info-container"}>
                                
                                    <p className="title-info">Title: <span key={titleDetail.Title}> {titleDetail.Title}</span></p>
            
                                    <p className="title-info">First Released: <span key={titleDetail.Released}className="title-results">{titleDetail.Released}</span></p>

                                    <p className="title-info">Plot: <span className="title-results" key={titleDetail.Plot}>{titleDetail.Plot}</span></p>

                                    <p className="title-info">Year: <span className="title-results" key={titleDetail.Year}> {titleDetail.Year}</span></p>
                                    
                                    <p className="title-info">Runtime: <span className="title-results" key={titleDetail.Runtime}>{titleDetail.Runtime}</span></p>

                                    <p className="title-info">Awards: <span className="title-results" key={titleDetail.Awards}>{titleDetail.Awards}</span></p>

                                    <p className="title-info">Director: <span className="title-results" key={titleDetail.Director}>{titleDetail.Director}</span></p>

                                    <p className="title-info">Actors: <span className="title-results" key={titleDetail.Actors}>{titleDetail.Actors}</span></p>

                                    <p className="title-info">Writer: <span className="title-results" key={titleDetail.Writer}>{titleDetail.Writer}</span></p>

                                    <p className="title-info">Genre: <span className="title-results" key={titleDetail.Genre}>{titleDetail.Genre}</span></p>

                                    <p className="title-info">Rated: <span className="title-results" key={titleDetail.Rated}>{titleDetail.Rated}</span></p>

                                    <p className="title-info">Type: <span className="title-results" key={titleDetail.Type}>{titleDetail.Type}</span></p>

                                    <p className="title-info">Country: <span className="title-results" key={titleDetail.Country}>{titleDetail.Country}</span></p>

                                    <p className="title-info">Box Office: <span className="title-results" key={titleDetail.BoxOffice}>{titleDetail.BoxOffice}</span></p>

                                    <p className="title-info">IMDB Rating: <span className="title-results" key={titleDetail.Ratings[0]}>{titleDetail.Ratings[0].Value}</span></p>
                                
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