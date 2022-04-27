import React from 'react';
import {Link} from 'react-router-dom'
import './SearchResults.css';

const TitleList = ({titles}) => {
    return (
        <>
        {titles.map((title,index)=> 
        <div className="card-container">
            <div key={index}>
            <Link to={`/titledetails/${title.imdbID}`}><img key={title.Poster}className="poster"src={title.Poster} alt={title.Title}></img></Link>
            </div>
        </div>)}
        </>
    )
}

export default TitleList