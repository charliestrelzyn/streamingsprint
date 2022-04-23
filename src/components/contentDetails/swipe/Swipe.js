import React, {useState} from 'react'
import SwipeableViews from 'react-swipeable-views'
import './swipe.css'

export default function Swipe({titleDetails}) {
  
  return (
    <div className="slide">
      {
         titleDetails.map(item => {
          return <SwipeableViews enableMouseEvents>
          <div className="slide1">
            <div className='circles-container'>
              <div className='circle1'></div>
              <div className='circle2'></div>
            </div>
            <img className="title-image" src={item.Poster} alt=''></img>
          </div>
          <div className="slide2">
          <div className='circles-container'>
              <div className='circle3'></div>
              <div className='circle4'></div>
            </div>

          <p className="title-info">Title: <span> {item.Title}</span></p>
            
            <p className="title-info">First Released: <span className="title-results">{item.Released}</span></p>

            <p className="title-info">Plot: <span className="title-results">{item.Plot}</span></p>

            <p className="title-info">Year: <span className="title-results"> {item.Year}</span></p>
            
            <p className="title-info">Runtime: <span className="title-results">{item.Runtime}</span></p>

            <p className="title-info">Awards: <span className="title-results">{item.Awards}</span></p>

            <p className="title-info">Director: <span className="title-results">{item.Director}</span></p>

            <p className="title-info">Actors: <span className="title-results">{item.Actors}</span></p>

            <p className="title-info">Writer: <span className="title-results">{item.Writer}</span></p>

            <p className="title-info">Genre: <span className="title-results">{item.Genre}</span></p>

            <p className="title-info">Rated: <span className="title-results">{item.Rated}</span></p>

            <p className="title-info">Type: <span className="title-results">{item.Type}</span></p>

            <p className="title-info">Country: <span className="title-results">{item.Country}</span></p>

            <p className="title-info">Box Office: <span className="title-results">{item.BoxOffice}</span></p>

            <p className="title-info">IMDB Rating: <span className="title-results">{item.Ratings[0].Value}</span></p>
            
          </div>
        </SwipeableViews>   
         })
      }
     </div>
  )
}
  

