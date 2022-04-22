import React from 'react';
import {Link} from 'react-router-dom'
import './SearchResults.css';

const TitleList = ({titles}) => {
    return (
        <>
        {titles.map((title)=> 
        <div className="card-container">
            <div>
            <Link to={`/titledetails/${title.imdbID}`}><img className="poster"src={title.Poster} alt={title.Title}></img></Link>
            </div>
        </div>)}
        </>
    )
}

export default TitleList