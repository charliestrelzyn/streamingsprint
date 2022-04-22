import React, {useContext} from 'react';
import './Main.css'
import { useNavigate } from 'react-router-dom'
import { ModeContext } from '../../../context/ModeContext';


const Main =(props) => {
    let navigate = useNavigate()
    
    const {darkMode,setDarkMode}=useContext(ModeContext);

    
    return (
        <div className={darkMode ? "dark-main-container" : "light-main-container"}>

            <h1>STREAMING SPRINT</h1>

            <p className={darkMode ? "dark-main-text" :"main-text"}>Find what you want to watch anywhere on the internet.</p>

            <div className="btn-container">
                 <button className="stream-btn" type="submit" onClick={()=>{
                  navigate("/search")}}>Start Searching</button>
            </div>
            <div>
                <p className={darkMode ? "dark-main-text" :"main-text"}>Search thousands of streaming providers including</p>
            </div>
           

        </div>
    )

    
}

export default Main